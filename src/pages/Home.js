import React from "react";
import "./main.css";

import Header from "./../components/Header/Header";
import About from "./../components/About/About";
import Search from "../components/Search/Search";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return (
        <div>
            
            <Header />
            <Navbar/>
            <About />
            <Search />
        </div>
    )
}

export default Home;