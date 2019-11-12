import React from "react";

function Card(props) {
    return (
        <div
            // onClick={() => props.handleClick(props.id)}
            style={{ backgroundImage: `url("${props.image}")` }}
        >
            {props.img}
        </div>
    )
}

export default Card;