import './Tours.css';
import { Link } from "react-router-dom";
import React from "react";
import Tour from './tour/Tour';

const Tours = (tours) => {
    
    return (
        <div id='Tourrs'>
            {tours.data.map((x) => (
                <div key={x.id}>
                    <Link to={`/city/${x.id}`}>
                    <Tour x={x} /> </Link>
                </div>
            ))}
        </div>
    );
}
export default Tours;