import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const SearchResults = ({food, foodTitle}) => {
    return(
        <>
        <Typography sx={{pb: 2, pt: 2}}>{foodTitle}</Typography>
            <Grid container spacing={2}>
                {
                    food.map(
                        (value, index) => {
                            return (
                                <Grid item key={index} xs={6} md={2}>
                                    <Card>
                                        <CardContent>
                                            {value.name}
                                        </CardContent>
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