import React from 'react'

const Display = (props) => {
    return (
        <div id="display">
          <span className= "displayText"><b>{props.text}</b></span> 
        </div>
    )
}

export default Display
