import './App.css';
import React from 'react';

/* snip down  for codepen */
class DrumPad extends React.Component {
  
  constructor(props) {
    super(props)
   this.playSound=this.playSound.bind(this) 
  }
  
  playSound(event) {
    var target=event.target
    var newPlayed=target.id
    this.props.displayHandler(newPlayed)
    }

  render() {
    return(
      <div className='drumpad' id={this.props.thisId}
      onClick={this.playSound}
      >
      <audio src={this.props.soundSrc} className="clip"
      id={this.props.playKey}></audio>
      {this.props.playKey}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={played:"test"}
    this.handleDisplayChange=this.handleDisplayChange.bind(this)
  }

  handleDisplayChange(text) {
    this.setState({played:text})
  }

    render() {
        return( 
					<div id="drum-machine" >
            <div id="display">{this.state.played}</div> 

              <DrumPad 
                thisId='drum1'
                soundSrc="http://pcblues.com/fcc/simon/assets/victory.mp3"
                playKey='Q'
                displayHandler={this.handleDisplayChange}
              />
              <DrumPad 
                thisId='drum2'
                soundSrc="http://pcblues.com/fcc/simon/assets/upgrade.mp3"
                playKey='W'
                displayHandler={this.handleDisplayChange}
              />
              <DrumPad 
                thisId='drum3'
                soundSrc="http://pcblues.com/fcc/simon/assets/victory.mp3"
                playKey='E'
                displayHandler={this.handleDisplayChange}
              />
              <DrumPad 
                thisId='drum4'
                soundSrc="http://pcblues.com/fcc/simon/assets/victory.mp3"
                playKey='A'
                displayHandler={this.handleDisplayChange}
              />
              <DrumPad 
                thisId='drum5'
                soundSrc="http://pcblues.com/fcc/simon/assets/beep1d.mp3"
                playKey='S'
                displayHandler={this.handleDisplayChange}
              />
              <DrumPad 
                thisId='drum6'
                soundSrc="http://pcblues.com/fcc/simon/assets/beep1c.mp3"
                playKey='D'
                displayHandler={this.handleDisplayChange}
              />
              <DrumPad 
                thisId='drum7'
                soundSrc="http://pcblues.com/fcc/simon/assets/beep1b.mp3"
                playKey='Z'
                displayHandler={this.handleDisplayChange}
              />
              <DrumPad 
                thisId='drum8'
                soundSrc="http://pcblues.com/fcc/simon/assets/beep1a.mp3"
                playKey='X'
                displayHandler={this.handleDisplayChange}
              />
              <DrumPad 
                thisId='drum9'
                soundSrc="http://pcblues.com/fcc/simon/assets/delete.mp3"
                playKey='C'
                displayHandler={this.handleDisplayChange}
              />
            </div>
          
      )
    }
}


/* snip up for codepen */
export default App;
