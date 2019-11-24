import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="card"
            onClick={() => props.handleClick(props.id)}
        >
            <img className="card-img" src={props.img} alt="pokemon-card"/>
        </div>
    )
}

export default Card;