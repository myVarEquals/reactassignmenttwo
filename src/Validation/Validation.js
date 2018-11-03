import React from 'react';

const validation = (props) => {

    let validText = null;
    if(props.textLength) { // only render if text length > 0

        // message options
        let short = 'Too short!';
        let long = 'Too long!';
        let perfect = 'Perfect!';
        let message = null;
        // message assignment
        if(props.textLength < 6) message = short;
        if(props.textLength > 10) message = long;
        if(props.textLength >= 5 && props.textLength <= 10) message = perfect;
        // assignment of JSX
        validText = (
            <p>{message}</p>
        );
    }

    return (        
        <div>
            {validText}
        </div>
    );
}

export default validation;