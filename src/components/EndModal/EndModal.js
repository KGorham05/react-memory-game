import React from "react";
import "./style.css";

function EndModal(props) {
    return (
        <div id="game-over-modal" className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3 menu ">

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="menu-title text-center">PoKeMoN MeMoRy!</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button className="start-btn btn btn-primary" onClick={props.handleClick}>Start Game!</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EndModal;