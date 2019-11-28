import React, { Component } from "react";
import Nav from "../Nav";
import Card from "../Card";
import pokeArr from "../../pokemon.json";
import "./style.css";

class Game extends Component {

    state = {
        score: 0,
        aCardHasBeenPicked: false,
        firstImgUrl: "",
        secondImgUrl: "",
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
                frontImgPath: arr[randomIndex],
                id: i,
                backImgPath: "pokeball.png",
                isPicRevealed: false
            }
            const copyOfPick = {
                frontImgPath: arr[randomIndex],
                id: i + "a",
                backImgPath: "pokeball.png",
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

    compareCa
    
    handleCorrectGuess = newData => {
        console.log("Correct Guess");
        this.setState({ pokeData: newData })
    };

    handleIncorrectGuess = newData => {
        console.log("Incorrect Guess");
        this.setState({ pokeData: newData })
    };

    revealCard = id => {
        // map over the data to find the card object to update
        const newData = this.state.pokeData.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (newItem.isPicRevealed === false) {
                    newItem.isPicRevealed = true;
                    // if the first img url to compare is empty
                    if (!this.state.firstImgUrl) {
                        // save the img url for logic comparison with the second card
                        this.setState({ firstImgUrl: newItem.frontImgPath }, () => {
                            console.log(this.state)
                        })
                    }
                    else {
                        // ** NOTE ** consider breaking this into a compare card function ** **
                        this.setState({ secondImgUrl: newItem.frontImgPath }, () => {
                            console.log(this.state)
                            // let guessedCorrectly = false;
                            // if they are a match, leave them face up
                            if (this.state.firstImgUrl === this.state.secondImgUrl) {
                                console.log('You found a match');
                            }
                            // if they are not a match, hide the images again 
                            else {
                                console.log('Not a match');
                            }

                            // guessedCorrectly
                            //     ? this.handleCorrectGuess(newData)
                            //     : this.handleIncorrectGuess(newData)
                        })
                    }
                }
            }
            return newItem
        });
        this.setState({ pokeData: newData })
    }

    handleClick = id => {

        // if a card has not been picked
        if (!this.state.aCardHasBeenPicked) {
            // update the state
            this.setState({ aCardHasBeenPicked: true }, () => {
                // filp it over. 
                this.revealCard(id);

            })
        }
        // else it is the second card
        else {
            // flip it over
            this.revealCard(id);
            // compare it to the first card to see if they are a match

        }

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
                    <Nav logo={`${process.env.PUBLIC_URL}/assets/images/logo.png`} />
                    <div className="game-board container justify-content-center">
                        {/* Map over array of cards */}
                        {this.state.pokeData.map((poke) => {
                            if (poke.isPicRevealed) {
                                return (
                                    <Card
                                        key={poke.id}
                                        id={poke.id}
                                        img={`${process.env.PUBLIC_URL}/assets/images/pokemon/${poke.frontImgPath}`}
                                        handleClick={this.handleClick}
                                    />
                                )
                            }
                            return (
                                <Card
                                    key={poke.id}
                                    id={poke.id}
                                    img={`${process.env.PUBLIC_URL}/assets/images/${poke.backImgPath}`}
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