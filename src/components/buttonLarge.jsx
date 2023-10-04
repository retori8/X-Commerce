import React from "react";
import { Link } from "react-router-dom";

export const ButtonLarge = (props) => (
    <>
        <Link to='/form' >
            <div class="containerButton">
                <a href="#" class="buttonRedondo">{props.text}</a>
            </div>
        </Link>
    </>
);