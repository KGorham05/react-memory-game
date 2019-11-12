import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";
import pokeArr from "../../pokemon.json";
import "./style.css";

class Game extends Component {
    state = {
        score: 0,
        pokeInPlay: []
    };

    getRandomPokemon = (list, n) => {
        const pokemonSelected = [];
        // loop through n times 
        for (let i = 0; i < n; i++) {
            let randomIndex = Math.floor(Math.random() * list.length);
            let pick = list[randomIndex];
            pokemonSelected.push(pick);
            // remove item from array to prevent duplicates
            list.splice(randomIndex, 1);
        }
        this.setState({ pokeInPlay: pokemonSelected }, () => {
            console.log(this.state.pokeInPlay);
        });
    }

    componentDidMount() {
        this.getRandomPokemon(pokeArr, 10);
    }
    // handleClick = () => {

    // }

    render() {
        if (this.state.pokeInPlay.length === 0) {
            return (
                <div>
                    Randomly Selecting your Pokemon!
                </div>
            )
        } else {
            return (
                <div>
                    <Nav />
                    <Header />
                    <div className="game-board">
                        {/* Map over array of cards */}
                        Pokemon have been selected!
                        {this.state.pokeInPlay.map(poke => (
                            <Card img={poke} />
                        ))}
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default Game;