import React from 'react';
import './BackDrop.css';

const BackDrop = props => {
    return (
        <div className="backDrop" onClick={props.click}> </div>

       
    )
}

export default BackDrop;