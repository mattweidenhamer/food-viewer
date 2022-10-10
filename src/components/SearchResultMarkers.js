import React from "react";
import { Typography, Card, CardContent, CardMedia} from "@mui/material";
import { InfoWindow } from "@react-google-maps/api";


const SearchResultMarkers = (place) => {
    const location = {lat: place.coordinates.latitude, lat: place.coordinates.longitude};

    return(
        <>
            <InfoWindow position={location}>
                <Card sx={{ maxWidth: 345 }}>
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
                    
                    {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                    
                </Card>
            </InfoWindow>
        </>
    )
}

export default SearchResultMarkers