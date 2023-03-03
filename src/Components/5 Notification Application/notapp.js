
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell} from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './notapp.css';
function NotApp(){
    return(
        <>
        <div className="text-center wid p-1">
            <h1 className="noti">Notifications</h1>
                <div className="p-1">
                    <div className="bg-primary text-white left m-2 p-1"><FontAwesomeIcon icon={faCircleCheck}/>Information Message</div>
                    <div className="bg-success text-white left m-2 p-1"><FontAwesomeIcon icon={faCircleCheck}/>Success Message</div>
                    <div className="bg-warning text-white left m-2 p-1"><FontAwesomeIcon icon={faBell}/>Warning Message</div>
                    <div className="bg-danger text-white left  m-2 p-1"><FontAwesomeIcon icon={faCircleExclamation}/>Error Message</div>
                </div>
        </div>
        </>
    )
};

export default NotApp;