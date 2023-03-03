import React, { useEffect,useState } from "react";
export function Gamedetails(){
    const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/jsonAssign.json")
        .then(res=>res.json())
        .then(jsonAssignment=>setDetails(jsonAssignment))
    })
    return(
        <>
            <div className="container-fluid row">
                {
                    details.map((value,index)=>
                    <>
                        <div className="card col-lg-3">
                            <img src={value.image}className="card-img-top"/>
                                <div className="card-body ">
                                    <h2 className="card-title">{value.gameName}</h2>
                                    <h5 className="card-text">Platform: {value.Platform}</h5>
                                    <p className="card-text">{value.description}</p>
                                </div>
                        </div>
                    </>
                    )
                }
            </div>
        </>
    )
}

