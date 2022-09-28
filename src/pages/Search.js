
import React from "react";
import SearchResults from "../components/SearchResults";

const Search = ({searchResults}) => {
    
    
    const cheapFood = searchResults.filter(
        (value) => value.price === "$"
    )
    const notQuiteCheapFood = searchResults.filter(
        (value) => value.price === "$$"
    )
    const expensiveFood = searchResults.filter(
        (value) => value.price === "$$$"
    )

    return (
        <>
            <SearchResults food={cheapFood} foodTitle = {"Cheap food"}/>
            <SearchResults food={notQuiteCheapFood} foodTitle = {"Reasonably priced food"}/>
            <SearchResults food={expensiveFood} foodTitle = {"Expensive food"}/>
        </>
    )
}

export default Search