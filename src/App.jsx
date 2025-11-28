import React from "react";
import hero from "../public/hero.png"

const App = () => {
    return(
        <main>
            <div className="pattern" />
            <div className="wrapper">
                <header>
                    <img src={hero} alt="Hero Banner" />
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
                </header>
            </div>
            <p>Search</p>
        </main>
    )
}

export default App