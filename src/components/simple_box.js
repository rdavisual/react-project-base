import React from 'react';

const SimpleBox = ({id, onClick, classBox, available}) => {

    const changeClass = (e)=>{
        if (available) {
            onClick(e.target.id);
            available = false;
        }
    };

    return ( <div id={id} className={`box ${classBox||''}`} onClick={changeClass} ></div>);
};

export default SimpleBox;
