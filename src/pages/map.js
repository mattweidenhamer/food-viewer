import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import APIkey from "./data/secret.json"
import SearchResultMarkers from "../components/SearchResultMarkers"

const containerStyle = {
  width: '800px',
  height: '400px'
};

function MapPage({searchResults}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: APIkey.APIkey
  })

  const center = {
    lat: searchResults[0]["coordinates"]["latitude"],
    lng: searchResults[0]["coordinates"]["longitude"]
  };

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {
            searchResults.map((value) => {
                return <SearchResultMarkers place={value}/>
            })
        }

      </GoogleMap>
  ) : <></>
}

export default React.memo(MapPage)