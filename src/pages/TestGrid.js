import { Typography, Grid} from '@mui/material'
import React from 'react'

const TestGrid = () => {

    return  (
        <>
        <Grid container>
            <Grid item xs={6} md={2}>Hi!</Grid>
            <Grid item xs={6} md={2}>Hello!</Grid>
            <Grid item xs={6} md={2}>This is a test to make it as rowed as possible.</Grid>
            <Grid item xs={6} md={2}>Expanding test</Grid>
            <Grid item xs={6} md={2}>Expanding test 2</Grid>
            <Grid item xs={6} md={2}>Expanding test 3</Grid>
            <Grid item xs={6} md={2}>Expanding test 4</Grid>
        </Grid>

            <Typography>I am the test grid!</Typography>
        </>
    )
}

export default TestGrid