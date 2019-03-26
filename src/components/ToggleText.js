import React from 'react';

const ToggleText = (props) => {
    const point = {
        cursor: 'pointer'
    }
    let dispalyText = props.isToggle ? 'Hello Pakistan' : 'Hello World'
    return(
        <div style={point} onClick={props.toggleText}>{dispalyText}</div>
    )
}

export default ToggleText 