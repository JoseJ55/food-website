import React, { useState } from "react";
import "./style.css";

import { FiMenu } from "react-icons/fi"
import { BsFileX } from "react-icons/bs";

function Navbar() {
    const [navStyle, setNavStyle] = useState({display: "none"});
    const [navBack, setNavBack] = useState({backgroundColor: "transparent"});
    const [navHeight, setNavHeight] = useState({height: "10vh"});

    const toggleNav = () => {
        if(navStyle.display === "none"){
            setNavStyle({display: "flex"});
            setNavBack({backgroundColor: "#444"});
            // setNavBack({backgroundColor: "#444", display: "flex"});
            // setNavHeight({height: "10vh", width: "auto"})
        } else {
            setNavStyle({display: "none"});
            setNavBack({backgroundColor: "transparent", display: "none"});
            // setNavHeight({height: "100vh", width: "100%"})
        }
    }

    return (
        <div id="navbar"> 
        {/* style={navBack}> */}
            <div id="navMain" style={navBack}>
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
            </div>
            
        </div>
    )
}

export default Navbar;