import { Typography, Box, AppBar, Toolbar, Button, IconButton, TextField, InputAdornment, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, {useState} from 'react';
import TestGrid from '../pages/TestGrid';
import Search from '../pages/Search';
import SearchIcon from '@mui/icons-material/Search';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Layout= () => {
    const [searchText, setSearchText] =useState("Defaulted Statetext")
    return  (
        <>
        <Paper sx={{backgroundColor : "#8F8F8F", pb: 2}}>
            <BrowserRouter>
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
                            <TextField
                            onKeyPress={
                                (e) => {
                                if(e.key === "Enter"){
                                    setSearchText(e.target.value)
                                }  
                                }
                            }
                            label="Search"
                            variant="outlined"
                            inputProps={{
                                startAdornment: (
                                    <InputAdornment position="Start">
                                        <SearchIcon/>
                                    </InputAdornment>

                                )
                            }
                                
                            }
                            />
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                    </AppBar>
                </Box> 

                <Button variant="outlined" component={Link} to="/search">Search</Button>

                <Button variant="outlined" component={Link} to="/testgrid">Test Grid</Button>

                <Typography variant="H6">Your search result for {searchText}</Typography>
                <Routes>
                    <Route exact path='/' element={<TestGrid/>}></Route>
                    <Route exact path='/testgrid' element={<TestGrid/>}></Route>
                    <Route exact path='/search' element={<Search/>}></Route>
                </Routes>
            </BrowserRouter>
            <Typography>
                I hope this is acceptable, I thought this was slightly more aestetically pleasing.
            </Typography>
        </Paper>
        </>
    )
}

export default Layout