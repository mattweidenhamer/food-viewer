import { Typography, Box, AppBar, Toolbar, Button, IconButton, TextField, InputAdornment, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, {useState, useEffect} from 'react';
import TestGrid from '../pages/TestGrid';
import Search from '../pages/Search';
import SearchIcon from '@mui/icons-material/Search';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import yelp from '../api/yelp';

const Layout= () => {
    const [searchText, setSearchText] =useState("Mexican")
    const [results, setResults] = useState([])
    

    const searchApi = async (e) => {
        const response = await yelp ('20176', e)
        console.log(response.data.businesses)
        setResults(response.data.businesses)
    }

    const doSearch = (e) => {
        setSearchText(e)
        searchApi(e)
    }

    useEffect(
        () => {
            searchApi("Mexican Food")
    }, [])

    return  (
        <>
        <Paper sx={{backgroundColor : "#CFCFCF", pt: 2, pb: 2}}>
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
                                    doSearch(e.target.value)
                                }  
                                }
                            }
                            label="Search"
                            variant="outlined"y
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            />
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                    </AppBar>
                </Box> 

                <Button variant="outlined" component={Link} sx = {{pr: 2}}to="/search">Search</Button>

                <Button variant="outlined" component={Link} sx = {{pr: 2}}to="/testgrid">Test Grid</Button>
                <p/>
            

                <Typography variant="H6">You searched for {searchText} food</Typography>
                <Routes>
                    <Route exact path='/' element={<Search searchResults={results}/>}></Route>
                    <Route exact path='/testgrid' element={<TestGrid/>}></Route>
                    <Route exact path='/search' element={<Search searchResults={results}/>}></Route>
                </Routes>
            </BrowserRouter>
            <Typography>
                This is a silly place to put a navigation option
            </Typography>
        </Paper>
        </>
    )
}

export default Layout