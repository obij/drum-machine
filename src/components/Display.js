import React from 'react'

const Display = (props) => {
    return (
        <div id="display">
          <p className= "displayText"><b>{props.text}</b></p> 
        </div>
    )
}

export default Display
