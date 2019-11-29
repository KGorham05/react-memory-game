import React from "react";
import StartBtn from "../StartBtn";
import "./style.css";

function Menu() {
    return (
        <div className="menu">
            <h1>PoKeMoN MeMoRy!</h1>
            <ul>
                <li>Click on a card to reveal the pokemon hiding underneath</li>
                <li>Match 2 of the same Pokemon to keep them face up</li>
                <li>Match all the cards to win!</li>
            </ul>
            <StartBtn />
        </div>
    )
};

export default Menu; 
