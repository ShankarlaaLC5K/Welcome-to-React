import React from "react";
import './memberlogin.css';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
function Memberlogin(){
    return(
        <>
        <div className="backo p-5">
            <div className="whito ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/123/123400.png" className="col-md-12 col-12 col-sm-12 col-lg-6 col-xl-6"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <form>
                                <h3 className="text-center mem">Member Login</h3>
                                <div className="newlap"><FontAwesomeIcon icon={faEnvelope}/>
                                    <input type="email" name="email" placeholder="Email" className="log"/>
                                </div><br/>
                                <div className="newlap"><FontAwesomeIcon icon={faLock}/>
                                    <input type="password" name="password" placeholder="******" className="log"/>
                                </div><br/>
                                    <input type="button" value="LOGIN" className="log1"/>
                            </form>
                            <div className="text-center p-5">
                                <p>Forgot <a href="" className="user">Username / Password ?</a></p>
                                <a href=""className="user">Create your account<FontAwesomeIcon Icon={faArrowRight}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Memberlogin;