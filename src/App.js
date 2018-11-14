import React, { Component } from 'react';
import './App.css';

const data = [
  { letter: 'Q', id:'Open-HH'       ,keyCode: 81, src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  { letter: 'W', id:'Closed-HH'     ,keyCode: 87, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  { letter: 'E', id:'Kick-and-Hat'  ,keyCode: 69, src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  { letter: 'A', id:'Punchy-Kick'   ,keyCode: 65, src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'},
  { letter: 'S', id:'Kick'          ,keyCode: 83, src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  { letter: 'D', id:'Snare'         ,keyCode: 68, src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
  { letter: 'Z', id:'Side-Stick'    ,keyCode: 90, src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'},
  { letter: 'X', id:'Clap'          ,keyCode: 88, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  { letter: 'C', id:'Shaker'        ,keyCode: 67, src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'},
]

class DrumPad extends React.Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handlekeyCode)
  }

  componentWillMount() {
    document.removeEventListener('keydown', this.handlekeyCode)
    window.focus()
  }

  handlekeyCode = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render() {
    return(
      <div className='drum-pad' 
      id={this.props.id} 
      onClick={this.handleClick}>
        
      <p>{this.props.letter}</p>
        
        <audio 
        id={this.props.letter} 
        src={this.props.src} 
        className='clip'
        ref={ref => this.audio = ref}></audio>
      </div>
    )
  }
}

class App extends Component {
  // Calls another array to store the buttons sound
  constructor(props) {
    super(props)
    this.state = {
      display: ''
    }
  }

  handleDisplay = display => this.setState({ display })

  render() {
    return (
      
      <div className="App">
        <div className="App-header" id="drum-machine">
          <div id="display">{this.state.display}</div>
            <div id='buttons'>
          {data.map(d => (
            <DrumPad 
            id={d.id} 
            letter={d.letter} 
            src={d.src}
            handleDisplay={this.handleDisplay}/>
          ))}</div>
              <h1 class="flow-text">Drum Machine</h1>
          
          
          
        </div>
      </div>
    );
  }
}

export default App;
