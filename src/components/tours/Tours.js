import './Tours.css';
import { Link } from "react-router-dom";
import React from "react";
import Tour from './tour/Tour';

const Tours = ({tours}) => {
    return (
        <div id='Tourrs'>
            {tours.map((x) => (
                <div key={x.id}>
                    <Link to={`/x/${x.id}`}>
                    <Tour x={x} /> </Link>
                </div>
            ))}
        </div>
    );
}
export default Tours;