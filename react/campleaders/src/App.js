import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'

/*

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/eZGMjp/.

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

User Story: I can see a table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days.

User Story: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.

User Story: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

Hint: To get the top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.

Hint: To get the top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.
*/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={ campers30:[], campersAll:[] }
  }    
  
  
  componentDidMount(){
    this.loadCampers()
  }

  loadCampers() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then((response) => {return response.json()})
    .then((responseJson)=> {
      this.setState({campers30:responseJson})
    })
    .catch((error) => {
      console.error(error)
    })
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((response) => {return response.json()})
    .then((responseJson)=> {
      this.setState({campersAll:responseJson})
    })
    .catch((error) => {
      console.error(error)
    })
  }


  showMyGrid() {
    //[{"username":"Smootimus","img":"https://avatars3.githubusercontent.com/u/6472304?v=4","alltime":95,"recent":81,"lastUpdate":"2018-03-19T19:24:02.627Z"}
      return (
        <div class="container">
        {this.state.campers30.map(i => 
        <MyRow  key={i.username} 
                username={i.username}
                img={i.img}
                alltime={i.alltime}
                recent={i.recent}
                lastUpdate={i.lastUpdate} />)}
        </div>
      )
    
  }
  
  
  render() {
    return (
      <div id="mo-board">
        <h1>Camper Leaderboard</h1>
        {this.showMyGrid()}
      </div>
     )
  }
  
}

class MyRow extends React.Component {
  constructor() {
    super()
  }    
  
  render() {
    return (
    <div class="row mo-row">
    <span class="col"><img src={this.props.img}></img></span>
    <span class="col">{this.props.username}</span>
    <span class="col">{this.props.recent}</span>
    <span class="col">{this.props.alltime}</span>
    </div>
    )
  }
}


export default App;
