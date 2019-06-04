import React from 'react';
import './NavToggleButton.css';
const NavToggleButton = props => {
    return (
       <button className="NavtoggleButton" onClick={props.click}>
           <div className="NavtoggleButton__line" />
           <div className="NavtoggleButton__line" />
           <div className="NavtoggleButton__line" />
       </button>
    )
}

export default NavToggleButton;