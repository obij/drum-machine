import React, { Component } from 'react'
import Drumpad from './components/Drumpad'
import Display from './components/Display'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
        };
    this.playAudio = this.playAudio.bind(this);
    this.helperPlayAudio= this.helperPlayAudio.bind(this);
    this.onKeyPressed= this.onKeyPressed.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  } 
  
  
  onKeyPressed(e){
    var x = e.keyCode;         // Get the Unicode value
    var y = String.fromCharCode(x); 

    y = y.toUpperCase();

    if(y === "Q" || y === "W" || y === "E" || y === "A" || y === "S" || y === "D" || y === "Z" || y=== "X" || y === "C"){
      this.playAudio(y);
    }
  }

 

  //helper function to playAudio function
  helperPlayAudio(sound, string){
    var audio= document.getElementById(sound);
    audio.play();
    this.setState({
      text: string
    });
  }

  
  playAudio(sound){
    if(sound === "Q"){
      this.helperPlayAudio(sound, "C Key");
    }else if(sound=== "W"){
      this.helperPlayAudio(sound, "D Key");
    }else if(sound=== "E"){
      this.helperPlayAudio(sound, "E Key");
    }else if(sound=== "A"){
      this.helperPlayAudio(sound, "E Flat Key");
    }else if(sound=== "S"){
      this.helperPlayAudio(sound, "F Key");
    }else if(sound=== "D"){
      this.helperPlayAudio(sound, "F Flat Key");
    }else if(sound=== "Z"){
      this.helperPlayAudio(sound, "G Key");
    }else if(sound=== "X"){
      this.helperPlayAudio(sound, "G Flat Key");
    }else if(sound=== "C"){
      this.helperPlayAudio(sound, "C Flat Key");
    }
  }

  

  render() {
    return (
      <div id= "drum-machine">
        <Drumpad playAudio={this.playAudio} />
        <Display text= {this.state.text}/>
     </div>
    )
  }
}

export default App
