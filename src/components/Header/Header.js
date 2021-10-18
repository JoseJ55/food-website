import React from "react";
import "./style.css";

import { BsChevronDoubleDown } from 'react-icons/bs';

import Navbar from "./../Navbar/Navbar";

function Header() {
    return (
        <div id="header">
            {/* <div id="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>News</li>
                </ul>
            </div> */}
            <Navbar />

            <div id="headerImg"></div>

            <div id="headerInfo">
                <h2 id="siteTitle">Food recipe</h2>
                <hr id="headerLine"/>
                <p id="headerPara">Recipe Search</p>
                <button id="headerButton"><BsChevronDoubleDown size={28}/></button>
            </div>
            
        </div>
    )
}
export default Header;