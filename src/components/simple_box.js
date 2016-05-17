import React from 'react';

const SimpleBox = ({compId, onClick, classBox}) => {
    const changeClass = ()=>{
        onClick(compId);
    };
    return ( <div id={compId} className={`box ${classBox||''}`} onClick={changeClass} ></div>);
};

export default SimpleBox;
