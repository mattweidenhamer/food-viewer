import React from "react"
import APIkey from "./data/secret.json"
import SearchResultMarkers from "../components/SearchResultMarkers"


const mapPage = ({searchResults}) => {
    const defaultInfo = {
        center: {
            lat: searchResults[0]["coordinates"]["latitude"],
            lng: searchResults[0]["coordinates"]["longitude"]

        },
        zoom: 10
    }
    return (

        <div style={{ height: '100vh', width: '100%' }}>
            <googleMapReact
             bootstrapURLKeys = {{key: APIkey}}
             defaultCenter={defaultInfo.center}
             defaultZoom = {defaultInfo.zoom}
             >
                <SearchResultMarkers places={searchResults}/>
            </googleMapReact>
        </div>
    )
}

export default mapPage