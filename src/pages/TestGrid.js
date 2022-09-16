import { Typography, Grid} from '@mui/material'
import React from 'react'

const TestGrid = () => {

    return  (
        <>
        <Grid container>
            <Grid item>Hi!</Grid>
            <Grid item>Hello!</Grid>
        </Grid>
            <Typography>I am the test grid!</Typography>
        </>
    )
}

export default TestGrid