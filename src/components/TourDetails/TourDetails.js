import "./TourDetails.css"
import { useState } from 'react';
import {useParams} from "react-router-dom";
function TourDetails(props){
    
    let  id  = useParams();
    
    let tourrr = props.data.filter(tourrr=>tourrr.id===id.id)
    const [More, setMore] = useState(false);
    function Click(){
        setMore(!More)
    }
    return(
        <>
        <h1>id : {tourrr[0].id}</h1>
        <h1>{tourrr[0].name}</h1>
        {More?<h1>{tourrr[0].info.slice(0,300) }<button onClick={Click}> (show more...)</button></h1>
        :<h1>{tourrr[0].info} <button onClick={Click}> (...show less)</button></h1>}
        <img src={tourrr[0].image} alt="Pic Tour"/>
        <h1>Price : {tourrr[0].price}</h1>
        </>
    )
}
export default TourDetails;