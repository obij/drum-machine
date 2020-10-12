import React from 'react'

const Drumpad = (props) => {
    return (
        <div>
         <div className="row">
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="Q-sound" onClick={()=>props.playAudio("Q")}><b>Q</b><audio className="clip" id="Q" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602113997/68441__pinkyfinger__piano-c_iperg4.wav" ></audio> </button></div>
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="W-sound" onClick={()=>props.playAudio("W")}><b>W</b><audio className="clip" id="W" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602197517/68442__pinkyfinger__piano-d_rhyoc8.wav" ></audio> </button></div>
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="E-sound" onClick={()=>props.playAudio("E")}><b>E</b><audio className="clip" id="E" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602197591/68443__pinkyfinger__piano-e_yy1iwu.wav" ></audio> </button></div>
         </div>

         <div className="row">
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="A-sound" onClick={()=>props.playAudio("A")}><b>A</b><audio className="clip" id="A" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602197708/68444__pinkyfinger__piano-eflat_ynabqy.wav" ></audio></button></div>
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="S-sound" onClick={()=>props.playAudio("S")}><b>S</b><audio className="clip" id="S" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602197767/68445__pinkyfinger__piano-f_d7boiq.wav" ></audio></button></div>
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="D-sound" onClick={()=>props.playAudio("D")}><b>D</b><audio className="clip" id="D" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602197806/68446__pinkyfinger__piano-f_d1ochz.wav" ></audio></button></div>
         </div>
         
         <div className="row">
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="Z-sound" onClick={()=>props.playAudio("Z")}><b>Z</b><audio className="clip" id="Z" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602197880/68447__pinkyfinger__piano-g_mqhqct.wav" ></audio></button></div>
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="X-sound" onClick={()=>props.playAudio("X")}><b>X</b><audio className="clip" id="X" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602197939/68448__pinkyfinger__piano-g_jjmpju.wav" ></audio></button></div>
          <div className="col-xs-4"><button className="btn btn-block drum-pad" id="C-sound" onClick={()=>props.playAudio("C")}><b>C</b><audio className="clip" id="C" src="https://res.cloudinary.com/dtssxoyjn/video/upload/v1602113997/68441__pinkyfinger__piano-c_iperg4.wav" ></audio></button></div>
         </div>
        </div>
    )
}

export default Drumpad
