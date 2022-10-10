import React from "react";
import { Typography, Card, CardContent, CardMedia} from "@mui/material";
import { InfoWindow } from "@react-google-maps/api";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Marker } from "@react-google-maps/api";


const SearchResultMarkers = ({place}) => {
    const location = {lat: Number(place.coordinates.latitude), lng: Number(place.coordinates.longitude)};

    return(
        <>
            <Marker position={location} label={place.name}/>
                {/* <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={place.image_url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {place.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rating: {place.rating} after {place.review_count} reviews <br/><br/>
                            {place.location.address1} <br/> 
                            {place.location.city}, {place.location.state}, <br/>
                            {place.phone}

                        </Typography>
                    </CardContent>
                </Card>
            </InfoWindow> */
            }
        </>
    )
}

export default SearchResultMarkers