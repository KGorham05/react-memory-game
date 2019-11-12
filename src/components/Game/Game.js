import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import pokeArr from "../../pokemon.json";
import "./style.css";

class Game extends Component {
    state = {
        score: 0,
        pokeInPlay: []
    };

    getRandomPokemon = (list, quantity) => {
        const pokemonSelected = [];
        for (let i = 0; i < quantity; i++) {
            let randomIndex = Math.floor(Math.random() * list.length)
            let pick = list[randomIndex];
            pokemonSelected.push(pick);
            list.splice(randomIndex, 1);
        }
        this.setState({pokeInPlay: pokemonSelected}, () => {
            console.log(this.state.pokeInPlay);
        });
        
    }

    componentDidMount() {
        this.getRandomPokemon(pokeArr, 10);
    }
    // handleClick = () => {
        
    // }

    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div className="game-board">
                    {/* Map over array of cards */}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Game;