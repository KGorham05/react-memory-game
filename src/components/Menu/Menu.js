import React from "react";
import StartBtn from "../StartBtn";
import "./style.css";

function Menu(props) {

    return (
        <div id="overlay" className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4 menu">

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="menu-title">PoKeMoN MeMoRy!</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li>Click on a card to reveal the pokemon hiding underneath</li>
                                <li>Match 2 of the same Pokemon to keep them face up</li>
                                <li>Match all the cards to win!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button onClick={props.handleClick}>Start</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
};

export default Menu; 
