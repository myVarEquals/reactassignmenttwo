import React from 'react';

const character = (props) => {

    const spanStyle = { // basic styling to seperate letters
        margin: "0 10px"
      };
    
    return (
        // insert styling, add on click handler, display letter from input
        <span style={spanStyle} onClick={props.click}>{props.myLetter}</span>
    )

}

export default character;