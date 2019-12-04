import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <div className="container-fluid">
            <div className="row nb">

                <div className="offset-4 col-4">
                    <img src={props.logo} alt="pokemon logo" className="img-fluid logo mx-auto" />
                </div>
                
                <div className="col-4 text-center">
                    <div className="timer">{props.minutes}:{props.seconds}</div>
                </div>

            </div>
        </div>
    );
}

export default Nav;