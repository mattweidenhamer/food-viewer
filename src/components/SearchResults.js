import React from "react";
import { Typography, Grid, Card, CardContent, CardMedia, CardActions, Button} from "@mui/material";

const SearchResults = ({food, foodTitle}) => {

    return(
        <>
        {
            //ternary expression
            (food.length > 0) ? <Typography sx={{pb: 2, pt: 2}}>{foodTitle}</Typography> :  <></>
        }

            <Grid container spacing={2}>
                {
                    food.map(
                        (value, index) => {
                            return (
                                <Grid item key={index} xs={6} md={2}>
                                    {/*
                                        <Card>
                                            <CardContent>
                                                {value.name}
                                            </CardContent>
                                        </Card>
                                    */}
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={value.image_url}
                                            alt="green iguana"
                                        />
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
                                        
                                        {/* <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions> */}
                                        
                                    </Card>
                                </Grid>
                            )
                        }
                    )
                }
            </Grid>
        </>
    )
}

export default SearchResults