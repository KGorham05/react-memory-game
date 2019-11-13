import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="card"
            onClick={() => props.handleClick()}
        >
            <img className="card-img" src={props.back} alt="pokemon-card"/>
        </div>
    )
}

export default Card;