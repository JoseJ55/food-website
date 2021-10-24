import React from "react";
import "./style.css";

import { BsChevronDoubleDown } from 'react-icons/bs';


function Header() {
    return (
        <div id="header">
            <div id="headerImg"></div>

            <div id="headerInfo">
                <h2 id="siteTitle">Food recipe</h2>
                <hr id="headerLine"/>
                <p id="headerPara">Recipe Search</p>
                <a href="#search"><button id="headerButton"><BsChevronDoubleDown size={28}/></button></a>
            </div>

        </div>
    )
}
export default Header;