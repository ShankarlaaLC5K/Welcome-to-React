import { faFaceLaughBeam, faFaceMeh, faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Route,Routes,BrowserRouter} from "react-router";
import { Link } from "react-router-dom";
import './feedback.css';
import './thanks.js'
import Thanks from "./thanks.js";
function Feedback(){
    return(
    <>
        <div className="text-center p-5 feedbackbody">
            <div className="bg-white p-5">
                <h3>How satisfied are you with our<br/>customer support performance?</h3>
                <div className="container p-5">
                    <div className="row p-5">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 feedl">
                        <Link to='/thanks'className="feedbackfont"><FontAwesomeIcon icon={faFaceLaughBeam}/><br/><p>Happy</p></Link>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 feedm">
                            <Link to='/thanks' className="feedbackfont"><FontAwesomeIcon icon={faFaceMeh}/><br/><p>None</p></Link>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 feedf">
                            <Link to='/thanks' className="feedbackfont"><FontAwesomeIcon icon={faFaceSadTear}/><br/><p>Sad</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Feedback;