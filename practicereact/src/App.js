import './App.css';
import React from 'react';

/* npm start then open with live server */
/* snip down  for codepen */
class DrumPad extends React.Component {
  
  constructor(props) {
    super(props)
    
  }
  

  render() {
    return(
      <div className='drum-pad' id={this.props.thisId}
      onClick={this.props.playSound(this)}
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
    this.findDrum=this.findDrum.bind(this)
    this.playSoundHandler=this.playSoundHandler.bind(this)
    this.drumList=[]
  }



  componentWillMount(){
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
}


componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
}

  findDrum(keyCode) {
    var  result=null
    var drumCount=this.drumList.length
    for(var c=0;c<drumCount;c++) {
      var drum = this.drumList[c]
      var checkKey =drum.props.playKey
      if (checkKey===String.fromCharCode(keyCode)) {
        result=this.drumList[c]
      }
    }
    return result
  }

  playSoundHandler(drum) {
    var audio = new Audio(drum.props.soundSrc);
    audio.play();
    this.setState({played:drum.props.playKey})
  }

  handleKeyDown(e) {
    // call playSound of Drumpad with id of key
    var drum=this.findDrum(e.keyCode)
    if (drum!=null) {
      this.playSoundHandler(drum)
    }
  }



    render() {
      this.drumList=[<DrumPad 
        key='1'
        thisId='drum1'
        soundSrc="http://pcblues.com/fcc/simon/assets/victory.mp3"
        playKey='Q'
        playSound={this.playSoundHandler}
        ref='drum1'
        
        
      />,
      <DrumPad
      key='2' 
      thisId='drum2'
      soundSrc="http://pcblues.com/fcc/simon/assets/upgrade.mp3"
      playKey='W'
      playSound={this.playSoundHandler}
      ref='drum2'
    />,
    <DrumPad
      key='3'
      thisId='drum3'
      soundSrc="http://pcblues.com/fcc/simon/assets/victory.mp3"
      playKey='E'
      playSound={this.playSoundHandler}
      ref='drum3'
    />,
    <DrumPad
      key='4'
      thisId='drum4'
      soundSrc="http://pcblues.com/fcc/simon/assets/victory.mp3"
      playKey='A'
      playSound={this.playSoundHandler}
      ref='drum4'
    />,
    <DrumPad 
      key='5'
      thisId='drum5'
      soundSrc="http://pcblues.com/fcc/simon/assets/beep1d.mp3"
      playKey='S'
      playSound={this.playSoundHandler}
      ref='drum5'
    />,
    <DrumPad 
      key='6'
      thisId='drum6'
      soundSrc="http://pcblues.com/fcc/simon/assets/beep1c.mp3"
      playKey='D'
      playSound={this.playSoundHandler}
      ref='drum6'
    />,
    <DrumPad 
      key='7'
      thisId='drum7'
      soundSrc="http://pcblues.com/fcc/simon/assets/beep1b.mp3"
      playKey='Z'
      playSound={this.playSoundHandler}
      ref='drum7'
    />,
    <DrumPad
      key='8'
      thisId='drum8'
      soundSrc="http://pcblues.com/fcc/simon/assets/beep1a.mp3"
      playKey='X'
      playSound={this.playSoundHandler}
      ref='drum8'
    />,
    <DrumPad 
      key='9'
      thisId='drum9'
      soundSrc="http://pcblues.com/fcc/simon/assets/delete.mp3"
      playKey='C'
      playSound={this.playSoundHandler}
      ref='drum9'
    />

    ]
      return( 
          
					<div id="drum-machine" >
            <div id="display">{this.state.played}</div> 
              <div id="drums">
              {this.drumList}
              
          
              </div>
            </div>
          
      )
    }
}


/* snip up for codepen */
export default App;
