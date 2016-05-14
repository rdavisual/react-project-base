import React from 'react';

const SimpleBox = ({compId, onClick, classBox, available}) => {

    const changeClass = ()=>{
        if (available) {
            onClick(compId);
        }
    };

    return ( <div id={compId} className={`box ${classBox||''}`} onClick={changeClass} ></div>);
};

export default SimpleBox;
