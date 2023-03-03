import { Alert } from "bootstrap/dist/js/bootstrap.bundle";
import './datefun.css';
import React, { useState } from "react";
function DateFunc(){
    function getDate(){
        var date1=document.getElementById("date").value;
        // alert (date1);
        var date2 = new Date(date1);
        // alert (date2);
        var count=document.getElementById("number").value;
        // alert (count);
        date2.setDate(date2.getDate()+parseInt(count));
        // alert (date2);
        document.getElementById("result").value=date2.getDate(date2)+"-"+(date2.getMonth()+1)+"-"+(date2.getFullYear())
    }
    return(
        <>
            <div className="tablealign ">
                <table className="justify-content-center">
                    <tr>
                        <td><label><h4>Select a date</h4></label></td>
                    </tr>
                    <tr>
                        <td><input type="date" id="date"/></td>
                    </tr>
                    <tr>
                        <td><label><h4>Enter a number to Add the Days</h4></label></td>
                    </tr>
                    <tr>
                        <td><input type="text" id="number"/></td>
                    </tr>
                    <tr>
                        <td><button onClick={getDate} className="btn btn-warning">Add</button></td>
                    </tr>
                    <tr>
                        <td><h4>Your Course will end in</h4></td>
                    </tr>
                    <tr>
                        <td><input type="text" id="result" /></td>
                    </tr>
                </table>
            </div>
        </>
    );
}
export default DateFunc;
