import { Typography, Grid, Card, CardContent, Paper} from "@mui/material";
import React from "react";

const Search = ({searchResults}) => {

    return (
        <>
            <Grid container spacing={2}>
                {
                    searchResults.map(
                        (value) => {
                            return (
                                <Card>
                                    <CardContent>
                                        <Grid item xs={6} md={2}>{value.name}</Grid>
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