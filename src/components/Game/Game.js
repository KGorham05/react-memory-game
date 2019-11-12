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
        chosenPokemon: []
    }

    shuffleArray(arr) {
        for (let i = (arr.length - 1); i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

    getRandomPokemon = (arr, n) => {
        const pokemonSelected = [];
        // loop through n times 
        for (let i = 0; i < n; i++) {
            // select a pokemon from the array at random
            const randomIndex = Math.floor(Math.random() * arr.length);
            const pick = arr[randomIndex];
            // add it to the array
            pokemonSelected.push(pick);
            // add another one to the array 
            pokemonSelected.push(pick);
            // remove item from array to prevent duplicates
            arr.splice(randomIndex, 1);
        }
        this.shuffleArray(pokemonSelected);
        this.setState({ chosenPokemon: pokemonSelected });
    }

    componentDidMount() {
        this.getRandomPokemon(pokeArr, 10);
    }
    // handleClick = () => {

    // }

    render() {
        if (this.state.chosenPokemon.length === 0) {
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
                        {this.state.chosenPokemon.map((poke, i) => (
                            
                                <Card 
                                    key={i} 
                                    img={poke} 
                                    src={`${process.env.PUBLIC_URL}/assets/images/pokemon/${poke}`} 
                                    isFlipped={false}
                                />
                            
                        ))}
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default Game;