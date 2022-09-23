import { Typography, Grid, Card, CardContent, Paper} from '@mui/material'
import React from 'react'

const TestGrid = () => {
    const people = [
        "Matt", "Nill", "Amelia", "Emilia", "Puppers", "Nill Bye"
    ]

    return  (
        <>
        <Paper sx={{pt : 2}}>
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
        </Paper>

            <Typography>I am outside the test grid!</Typography>
        </>
    )
}

export default TestGrid