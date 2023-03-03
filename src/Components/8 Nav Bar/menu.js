import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './menu.css';
function Menu(){
    return(
    <>
        <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" width="28" height="28" className="d-inline-block align-text-top"/>React</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav navalign">
                    <Link to ='/hello' className="nav-link"><li>Helloworld</li></Link>
                    <Link to='/congratscard' className="nav-link"><li>Congrats cards</li></Link>
                    <Link to='/sol' className="nav-link"><li>Super Over League</li></Link>
                    <Link to='/socialb' class="nav-link"><li>SocialButton</li></Link>
                    <Link to='/notapp' class="nav-link"><li>Notification App</li></Link>
                    <Link to='/memberlogin' class="nav-link"><li>Member login</li></Link>
                    <Link to='/techcards' class="nav-link"><li>Technology cards</li></Link>
                    <Link to='/Counter' class="nav-link"><li>Counter Calculations</li></Link>
                    <Link to='/fruitscounter' class="nav-link"><li>Fruits Counter</li></Link>
                    <Link to='/feedback'class="nav-link"><li>Feedback</li></Link>
                    <Link to='/datefunc'class="nav-link"><li>DateFunc</li></Link>
                    <Link to='/gamingworld'class="nav-link"><li>Gamingworld</li></Link>
                </div>
            </div>
        </div>
        </nav>
    </>
    );
}
export default Menu;