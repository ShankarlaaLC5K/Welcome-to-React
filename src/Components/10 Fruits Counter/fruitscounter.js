import React,{useState} from "react";
import './fruitscounter.css';
function FruitsCounter(){
    const[mango,setMango]=useState(4);
    const[banana,setBanana]=useState(5);
    return(
        <>
        <div className="text-center bg-warning fruitsbody p-5">
            <div className="bg-white fruitscol p-5">
            <h1>Bob Ate {mango} mangoes {banana} bananas</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <img src="https://media.istockphoto.com/id/467328250/photo/mango.jpg?b=1&s=170667a&w=0&k=20&c=CMFzT8V7KqbRzoib0cZaSgEFHUBj54ZK8uzizKNygxU=" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 fruitimg"/><br/>
                        <button onClick={()=>setMango(mango+1)} className="btn btn-primary m-5">Eat Mango</button></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <img src="https://media.istockphoto.com/id/1154935375/photo/peeled-banana-on-white-background-photo-with-clipping-path.jpg?b=1&s=170667a&w=0&k=20&c=SHJRSAfuF0-MGDNMM-CVS3_2Vt24Wvy3m8GZT3SaS2o=" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 fruitimg"/><br/>
                        <button onClick={()=>setBanana(banana+1)}className="btn btn-primary m-5">Eat Banana</button></div>
            </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default FruitsCounter;