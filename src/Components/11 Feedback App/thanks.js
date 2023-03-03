import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './thanks.css'
function Thanks(){

    return(
        <>
        <div className="text-center p-5 thanksbody">
            <div className="bg-white p-5">
                <FontAwesomeIcon icon={faHeart}/>
                <h2>Thank You!</h2>
                <p>We will use your feedback to improve our customer support <br/>performance</p>
            </div>
        </div>
        </>
    );

}
export default Thanks;