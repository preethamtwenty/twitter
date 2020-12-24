import React from 'react';
import './Sidebaroption.css';

export const Sidebaroption = ({active,text,Icon}) => {
    return (
        <div className="sidebaroption">
        <Icon/>
        <h4>{text}</h4>
         
        </div>
    )
}



export default Sidebaroption; 
