import React, { useState } from "react";
import "./style.css";

import { FiMenu } from "react-icons/fi"

function Navbar() {
    const [navStyle, setNavStyle] = useState({display: "none"});
    const [navBack, setNavBack] = useState({backgroundColor: "transparent"});

    const toggleNav = () => {
        if(navStyle.display === "none"){
            setNavStyle({display: "flex"});
            setNavBack({backgroundColor: "#444"});
        } else {
            setNavStyle({display: "none"});
            setNavBack({backgroundColor: "transparent"});
        }
    }

    return (
        <div id="navbar" style={navBack}>
            <div id="navIcon">
                <button id="icon" onClick={toggleNav}><FiMenu size={42} color="white" /></button>
            </div>
            <div id="navBtns" style={navStyle}>
                <button className="navBtn" onClick={toggleNav}><a href="/">Home</a></button>
            </div>
        </div>
    )
}

export default Navbar;