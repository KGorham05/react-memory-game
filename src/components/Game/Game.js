import React, { Component } from "react";
import Menu from "../Menu";
import Nav from "../Nav";
import Card from "../Card";
import pokeArr from "../../pokemon.json";
import "./style.css";

class Game extends Component {

    state = {
        canGuess: true,
        aCardHasBeenPicked: false,
        firstPoke: "",
        secondPoke: "",
        pokeData: [],
        // minutes: 0,
        // seconds: 0
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

    compareCards = () => {
        console.log(this.state)
        // if they are a match, leave them face up
        if (this.state.firstPoke.frontImgPath === this.state.secondPoke.frontImgPath) {
            // handle correctly guess
            this.handleCorrectGuess();

        }
        // if they are not a match 
        else {
            // handle incorrect guess
            setTimeout(() => {
                this.setState({ canGuess: true }, () => {
                    this.handleIncorrectGuess();
                })
            }, 1500);
        }
    }

    handleCorrectGuess = () => {
        console.log("Correct Guess");
        // check for win condition
        let numCardsFaceUp = 0;
        // loop through all of the objects in the array
        this.state.pokeData.map(obj => {
            // if the card is facing up, increment the count
            if (obj.isPicRevealed) {
                numCardsFaceUp++;
            }
            return obj;
        })
        // if the number of cards facing up = the number of cards in play
        if (numCardsFaceUp === 18) {
            // alert you won!
            setTimeout(() => {
                alert('You Won!');
            }, 2000);
        }
        else {
            // reset img urls for logic comparison
            this.setState({
                firstPoke: "",
                secondPoke: "",
                canGuess: true
            })
        }
    };

    handleIncorrectGuess = () => {
        console.log("Incorrect Guess");
        // flip the cards back over 
        const newData = this.state.pokeData.map(item => {
            const newItem = { ...item };
            // look for the first card
            if (newItem.id === this.state.firstPoke.id) {
                newItem.isPicRevealed = false;
            }
            // look for the second card
            else if (newItem.id === this.state.secondPoke.id) {
                newItem.isPicRevealed = false;
            }
            return newItem
        });
        this.setState({
            pokeData: newData,
            firstPoke: "",
            secondPoke: ""
        })
    };

    revealCard = id => {
        // map over the data to find the card object to update
        const newData = this.state.pokeData.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (newItem.isPicRevealed === false) {
                    newItem.isPicRevealed = true;
                    // if the first pokemon data has not been saved for comparing it
                    if (!this.state.firstPoke) {
                        // save the pokemon object to the state
                        this.setState({ firstPoke: newItem })
                    }
                    else {
                        // ** NOTE ** consider breaking this into a compare card function ** **
                        this.setState({
                            secondPoke: newItem,
                            canGuess: false
                        }, () => {
                            this.compareCards()
                        })
                    }
                }
            }
            return newItem
        });
        this.setState({ pokeData: newData })
    };

    handleClick = id => {
        // if you're currently able to click
        if (this.state.canGuess) {
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
            }
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
                    <Menu />
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
    };

};

export default Game;

// add game menu modal
    // start button
    // game title
    // link to my portfolio + linkedIn
    // sound on/off icon button

// add game won message
// add a countdown till game over
// add card animations
// add sound effects 