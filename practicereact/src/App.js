import React, { Component } from 'react';
import './App.css';

/* snip down  for codepen */
class App extends Component {
  constructor(props) {
    super(props)
    this.state={played:"test"}
    this.setPlayed=this.setPlayed.bind(this)
  }

  setPlayed(event) {
    var target=event.target
    var newPlayed=target.id
    this.setState({played:newPlayed})
  }

    render() {
        return( 
					<div id="drum-machine" >
            <div id="display">{this.state.played}</div> 
              <div className="drum-pad" id="drum1" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/victory.mp3" className="clip" id="Q"></audio> Q</div>
              <div className="drum-pad" id="drum2" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/upgrade.mp3" className="clip" id="W"></audio>W</div>
              <div className="drum-pad" id="drum3" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/delete.mp3" className="clip" id="E"></audio>E</div>
              <div className="drum-pad" id="drum4" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/beep1a.mp3" className="clip" id="A">
              </audio>A</div>
              <div className="drum-pad" id="drum5" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/beep1b.mp3" className="clip" id="S">
              </audio>S</div>
              <div className="drum-pad" id="drum6" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/beep1c.mp3" className="clip" id="D">
              </audio>D</div>
              <div className="drum-pad" id="drum7" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/beep1d.mp3" className="clip" id="Z">
              </audio>Z</div>
              <div className="drum-pad" id="drum8" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/beep1c.mp3" className="clip" id="X">
              </audio>X</div>
              <div className="drum-pad" id="drum9" onClick={this.setPlayed}><audio src="http://pcblues.com/fcc/simon/assets/beep1d.mp3" className="clip" id="C">
              </audio>C</div>
            </div>
          
      );
    }
};


/* snip up for codepen */
export default App;
