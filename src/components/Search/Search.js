import React, { useState } from "react";
import "./style.css";

import { BiSearch } from "react-icons/bi"
import Searched from "./../Searched/Searched";

function Search() {
    const [searchText, setSearchText] = useState("");

    const search = () => {
        console.log(searchText)
    }

    return (
        <div id="search">
            <h2>Search recipe</h2>
            <div id="searchBar">
                <input 
                    type="text" 
                    id="searchText" 
                    placeholder="Eggs Benedict ..."
                    onChange={(value) => setSearchText(value.target.value)}
                />
                <button id="searchBtn" onClick={() => search()}>
                    <BiSearch size={28}/>
                </button>
                <Search />
            </div>
        </div>
    )
}

export default Search;