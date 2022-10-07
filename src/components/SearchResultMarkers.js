import React from "react";
import { Typography, Card, CardContent} from "@mui/material";

const SearchResultMarkers = (places) => {

    return(
        <div>
            {
            places.map(
                (value) => {
                    return (
                        <>
                            <Card lat={value["coordinates"]["latitude"]} lng={value["coordinates"]["longitude"]}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {value.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Rating: {value.rating} after {value.review_count} reviews <br/><br/>
                                        {value.location.address1} <br/> 
                                        {value.location.city}, {value.location.state}, <br/>
                                        {value.phone}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </>
                    )
                }
            )
        }
        </div>
    )
}

export default SearchResultMarkers