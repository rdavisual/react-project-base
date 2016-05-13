import React from 'react';

const SimpleBox = ({id, classBox}) => {

    return ( <div id={id} className={`box ${classBox||''}`} ></div>);
};

export default SimpleBox;
