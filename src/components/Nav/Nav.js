import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div className="nb container-fluid flex">
            <img src={props.logo} alt="pokemon logo" className="img-fluid logo mx-auto" />
        </div>
    );
}

export default Nav;