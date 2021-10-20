import React, { useState } from "react";
import "./style.css";

import { FiMenu } from "react-icons/fi"
import { BsFileX } from "react-icons/bs";

function Navbar() {
    const [navStyle, setNavStyle] = useState({display: "none", zIndex: -2});
    const [navBack, setNavBack] = useState({backgroundColor: "transparent"});
    const [navHeight, setNavHeight] = useState({height: "10vh"});

    const toggleNav = () => {
        if(navStyle.display === "none"){
            setNavStyle({display: "flex", zIndex: 3});
            setNavBack({backgroundColor: "#444"});
        } else {
            setNavStyle({display: "none", height: 0, zIndex: -2});
            setNavBack({backgroundColor: "transparent"});
        }
    }

    return (
        <div id="navbar"> 
            <div id="navIcon">
                <button id="icon" onClick={toggleNav}><FiMenu size={42} color="white" /></button>
            </div>

            <div id="navItems" style={navStyle}>
                {/* <div id="navGroup" style={navStyle}> */}
                    <div id="navBtns">
                        <button className="navBtn" onClick={toggleNav}><a href="/">Home</a></button>
                    </div>
                    
                    <button id="dim" onClick={toggleNav} style={navStyle}>
                    </button>
                {/* </div> */}
            </div>
            {/* <div id="navMain" style={navBack}>
                <div id="navIcon">
                    <button id="icon" onClick={toggleNav}><FiMenu size={42} color="white" /></button>
                </div>
                <div id="navBtns" style={navStyle}>
                    <button className="navBtn" onClick={toggleNav}><a href="/">Home</a></button>
                </div>
            </div>

            <div id="navDim" style={navStyle}>
                <button id="dim" onClick={toggleNav}>
                </button>
            </div> */}
            
        </div>
    )
}

export default Navbar;