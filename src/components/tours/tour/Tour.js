import "./Tour.css" 
import React from "react";

const Tour =({x}) => {
    return (
    <div id='Tourr'>
    <h1>Tour Name : {x.name}</h1>
    <img src={x.image} alt="imgTour"></img>
    </div>
    )}
    export default Tour;
