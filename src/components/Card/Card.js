import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="card"
            // onClick={() => props.handleClick(props.id)}
            // style={{ backgroundImage: `url("${props.src}")` }}
        >
            <img className="card-img" src={props.src} />
        </div>
    )
}

export default Card;