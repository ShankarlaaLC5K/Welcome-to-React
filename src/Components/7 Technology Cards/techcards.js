import React from "react";
import './techcards.css';
function Techcards(){
    return(
        <>
            <div className="bgc">
                <div className="text-center p-5">
                <h1>Learn 4.0 Technologies</h1>
                <p>Get Trained by alumni of IITs and top companies like Amazon,Microsoft,Intel,<br/>Nvidia,Qualcomm,etc. Learn directly from professionals involved in Product Development</p>
                </div>
                <div className="container">
                    <div className="row nbgc">
                        <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 box m-2 ds">
                            <h3>Data Scientist</h3>
                            <p>Data scientists gather and analyze large sets of structured and unstructured data</p>
                            <div className="imge"><img src="https://cdn-icons-png.flaticon.com/512/432/432693.png" className="col-2 col-sm-2 col-md-2 col-xl-2 col-lg-2"/></div>
                        </div>
                        <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 box m-2 it">
                            <h3>IoT Developer</h3>
                            <p>IoT Developers are professionals who can develop,manage and monitor IoT devices.</p>
                            <div className="imge"><img src="https://cdn-icons-png.flaticon.com/512/2516/2516186.png" className="col-2 col-sm-2 col-md-2 col-xl-2 col-lg-2"/></div>
                        </div>
                        <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 box m-2 vrd">
                            <h3>VR Developer</h3>
                            <p>A VR developer creates completely new digital environments that people can see.</p>
                            <div className="imge"><img src="https://cdn-icons-png.flaticon.com/512/1509/1509638.png" className="col-2 col-sm-2 col-md-2 col-xl-2 col-lg-2"/></div>
                        </div>
                        <div className="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 box m-2 ml">
                            <h3>ML Engineer</h3>
                            <p>Machine learning engineers feed data into models defined by data scientists.</p>
                            <div className="imge"><img src="https://cdn-icons-png.flaticon.com/512/8055/8055588.png" className="col-2 col-sm-2 col-md-2 col-xl-2 col-lg-2"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Techcards;