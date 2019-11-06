import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";

class Game extends Component {
    state = {
        score: 0,
    }

    handleClick = () => {
        
    }

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div>
                    {/* Map over array of cards */}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Game;