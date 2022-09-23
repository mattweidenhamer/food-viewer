import { Typography, Grid, Card, CardContent, Paper} from "@mui/material";
import React from "react";

const Search = () => {
    const people = [
        "Search", "Search2", "Search3", "Emilia", "Puppers", "Nill Bye"
    ]

    return (
        <>
            <Grid container spacing={2}>
                {
                    people.map(
                        (person) => {
                            return (
                                <Card>
                                    <CardContent>
                                        <Grid item xs={6} md={2}>{person}</Grid>
                                    </CardContent>
                                </Card>
                            )
                        }
                    )
                }
            </Grid>
        </>
    )
}

export default Search