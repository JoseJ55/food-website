import React, { useState } from "react";
import "./style.css";
import { useSpring, animated } from "react-spring";

import { FiMenu } from "react-icons/fi";
// need to work on getting the animation for the navbar going back to work everything else works
function Navbar() {
    const [navStyle, setNavStyle] = useState({display: "none", zIndex: -2});
    const [navChange, setNavChange] = useState({height: "auto", width: "auto"});
    const [navTag, setNavTag] = useState(false);

    const anim = useSpring({
        opacity: navTag ? 1 : 0,
        marginLeft: navTag ? 0 : -600,
    })
    const ani = useSpring({
        opacity: navTag ? 0 : 1,
        marginLeft: navTag ? -600 : 0,
    })

    const toggleNav = () => {
        if(navStyle.display === "none"){
            setNavStyle({display: "flex", zIndex: 3});
            // transform: "translate(20%, 0%)"
            setNavChange({height: "100vh", width: "100%", backgroundColor: "rgba(0, 0, 0, .4)"})
            setNavTag(true);
        } else {
            setNavStyle({display: "none", height: 0, zIndex: -2});
            // transform: "translate(-100%, 0%)"
            setNavChange({height: "auto", width: "auto", backgroundColor: "transparent"})
            setNavTag(false);
        }
    }

    return (
        <div id="navbar" style={navChange}> 
            <div id="navIcon">
                <button id="icon" onClick={toggleNav}><FiMenu size={42} color="white" /></button>
            </div>

            <animated.div style={anim}>
                <div id="navItems" style={navStyle}>
                    <div id="navBtns">
                        <button className="navBtn" onClick={toggleNav}><a href="/">Home</a></button>
                    </div>
                    
                    <button id="dim" onClick={toggleNav} style={navStyle}>
                    </button>
                </div>
            </animated.div>
        </div>
    )
}

export default Navbar;