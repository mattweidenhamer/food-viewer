import { Typography, Grid} from "@mui/material";
import React from "react";

const Search = () => {

    return (
        <>
        <Typography>This is the Search page</Typography>
        <Grid container>
            <Grid item xs={2}>Search page 1</Grid>
            <Grid item xs={4}>Middle search page</Grid>
            <Grid item xs={2}>Final search page</Grid>
        </Grid>
        </>
    )
}

export default Search