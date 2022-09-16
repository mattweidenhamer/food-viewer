import { Typography, Box, AppBar, Toolbar, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react';
import TestGrid from '../pages/TestGrid';

const Layout= () => {

    return  (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Test Bar Text
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                </AppBar>
            </Box> 
            <TestGrid></TestGrid>
        </>
    )
}

export default Layout