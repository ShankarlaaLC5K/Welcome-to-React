import React from "react";
import './socialb.css';
function SocialB(){
    return(
        <>
            <div className="image1 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="text-center p-4">
                    <h1 className="text-white headi fonto">Social Buttons</h1>
                    <button className="btn btn-warning m-3 buto like">Like</button>
                    <button className="btn btn-light m-3 buto">Comment</button>
                    <button className="btn btn-primary m-3 buto">Share</button>
                </div>
            </div>
        </>
    )
}
export default SocialB;