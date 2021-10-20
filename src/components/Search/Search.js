import React, { useState } from "react";
import "./style.css";

import { BiSearch } from "react-icons/bi"

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
                <button id="searchBtn">
                    <BiSearch size={28}/>
                </button>
            </div>
        </div>
    )
}

export default Search;