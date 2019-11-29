import React from "react";
import StartBtn from "../StartBtn";
import "./style.css";

function Menu(props) {

    return (
        <div id="overlay" className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4 menu ">

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="menu-title text-center">PoKeMoN MeMoRy!</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="directions">
                                <li>Click on the cards!</li>
                                <li>Match all the cards to win!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-8">
                            <button className="start-btn btn btn-primary" onClick={props.handleClick}>Start Game!</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
};

export default Menu; 
