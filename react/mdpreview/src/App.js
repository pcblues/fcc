import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*


Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/JXrLLE/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can type GitHub-flavored Markdown into a text area.

User Story: I can see a preview of the output of my markdown that is updated as I type.

Hint: You don't need to interpret Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked

Note: If you want to use the React JSX syntax, you need to enable 'Babel' as a preprocessor
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
