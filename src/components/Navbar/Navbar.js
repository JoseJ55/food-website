import React, { useState } from "react";
import "./style.css";

import { FiMenu } from "react-icons/fi"
import { BsFileX } from "react-icons/bs";

function Navbar() {
    const [navStyle, setNavStyle] = useState({display: "none", zIndex: -2});
    const [navBack, setNavBack] = useState({backgroundColor: "transparent"});
    const [navChange, setNavChange] = useState({height: "auto", width: "auto"});

    const toggleNav = () => {
        if(navStyle.display === "none"){
            setNavStyle({display: "flex", zIndex: 3});
            setNavBack({backgroundColor: "#444"});
            setNavChange({height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, .4)"})
        } else {
            setNavStyle({display: "none", height: 0, zIndex: -2});
            setNavBack({backgroundColor: "transparent"});
            setNavChange({height: "auto", width: "auto", backgroundColor: "transparent"})
        }
    }

    return (
        <div id="navbar" style={navChange}> 
            <div id="navIcon">
                <button id="icon" onClick={toggleNav}><FiMenu size={42} color="white" /></button>
            </div>

            <div id="navItems" style={navStyle}>
                <div id="navBtns">
                    <button className="navBtn" onClick={toggleNav}><a href="/">Home</a></button>
                </div>
                
                <button id="dim" onClick={toggleNav} style={navStyle}>
                </button>
            </div>
        </div>
    )
}

export default Navbar;