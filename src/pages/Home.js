import React from "react";
import "./main.css";

import Header from "./../components/Header/Header";
import About from "./../components/About/About";
import Search from "../components/Search/Search";

function Home() {
    return (
        <div>
            <Header />
            <About />
            <Search />
        </div>
    )
}

export default Home;