import React, { Component } from "react";
import Nav from "../Nav";
import Card from "../Card";
import pokeArr from "../../pokemon.json";
import "./style.css";

class Game extends Component {

    state = {
        score: 0,
        firstCardClicked: false,
        pokeData: []
    };

    shuffleArray(arr) {
        for (let i = (arr.length - 1); i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    };

    getRandomPokemon = (arr, n) => {
        const pokemonSelected = [];
        // loop through n times 
        for (let i = 0; i < n; i++) {
            // select a pokemon from the array at random
            const randomIndex = Math.floor(Math.random() * arr.length);
            const pick = {
                front: arr[randomIndex],
                id: i,
                back: "pokeball.png",
                isPicRevealed: false
            }
            const copyOfPick = {
                front: arr[randomIndex],
                id: i + "a",
                back: "pokeball.png",
                isPicRevealed: false
            }
            // add it to the array
            pokemonSelected.push(pick);
            // add another one to the array 
            pokemonSelected.push(copyOfPick);
            // remove item from array to prevent duplicates
            arr.splice(randomIndex, 1);
        }
        this.shuffleArray(pokemonSelected);
        this.setState({ pokeData: pokemonSelected }, () => console.log(this.state.pokeData));
    };

    componentDidMount() {
        this.getRandomPokemon(pokeArr, 9);
    };

    handleCorrectGuess(newData) {
        console.log("Correct Guess");
        this.setState({ pokeData: newData })
    };

    handleIncorrectGuess(newData) {
        console.log("Incorrect Guess");
        this.setState({ pokeData: newData })
    };

    handleClick = id => {
        let guessedCorrectly = false;

        const newData = this.state.pokeData.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (newItem.isPicRevealed === false) {
                    newItem.isPicRevealed = true;
                }
            }
            return newItem
        });
        guessedCorrectly
            ? this.handleCorrectGuess(newData)
            : this.handleIncorrectGuess(newData)
    };

    

    render() {
        if (this.state.pokeData.length === 0) {
            return (
                <div>
                    Randomly Selecting your Pokemon!
                </div>
            )
        } else {
            return (
                <div>
                    <Nav />
                    <div className="game-board container justify-content-center">
                        {/* Map over array of cards */}
                        {this.state.pokeData.map((poke) => {
                            if (poke.isPicRevealed) {
                                return (
                                    <Card
                                        key={poke.id}
                                        id={poke.id}
                                        img={`${process.env.PUBLIC_URL}/assets/images/pokemon/${poke.front}`}
                                        handleClick={this.handleClick}
                                    />
                                )
                            }
                            return (
                                <Card
                                    key={poke.id}
                                    id={poke.id}
                                    img={`${process.env.PUBLIC_URL}/assets/images/${poke.back}`}
                                    handleClick={this.handleClick}
                                />
                            )
                        })}


                    </div>
                    {/* <Footer /> */}
                </div>
            )
        }
    }
};

export default Game;