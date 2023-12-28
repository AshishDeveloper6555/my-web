import React from "react";
import  ReactDOM  from "react-dom";


function Footerwork(){
    return(
       ReactDOM.createPortal(
        <div>
        <h1> this is footerwrok </h1>
        </div>,
        document.getElementById('Footerwork')
       )
    )
}

export default Footerwork;
