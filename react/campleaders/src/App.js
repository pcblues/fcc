import React from 'react';
import './App.css';
import  'react-bootstrap'
/*

To do:

sort
arrows
font

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
    this.state={ campers30:[], rowStripe:0 }
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

  }

  showHeader() {
    return (
      <tr className="mo-table-h">
      <th>
          Headshot
          </th>
      <th>
      Name
      </th>
      <th>
      Last 30 Days
      </th>
      <th>
      All Time
      </th>
          </tr>
    )
  }

  showRows() {
    return (this.state.campers30.map(i => 
  <MyRow  key={i.username} 
          username={i.username}
          img={i.img}
          alltime={i.alltime}
          recent={i.recent}
          lastUpdate={i.lastUpdate}
          />))}
  

  showMyGrid() {
    //[{"username":"Smootimus","img":"https://avatars3.githubusercontent.com/u/6472304?v=4","alltime":95,"recent":81,"lastUpdate":"2018-03-19T19:24:02.627Z"}

    return (
        <div>
                <table className="mo-table">  
                <tbody>
                {this.showHeader()}
                {this.showRows()}
                </tbody>
                </table>
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
  render() {
    return (
      <tr >
    <td className = {this.props.rowClassName}>
      <img alt={this.props.username} src={this.props.img} height="42" width="42"></img>
    </td>
    <td className = {this.props.rowClassName}>
      {this.props.username}
      </td>
    <td className = {this.props.rowClassName}>
    {this.props.recent}
    </td>
    <td className = {this.props.rowClassName}>
    {this.props.alltime}
    </td>
  
    </tr>
    )
  }
}


export default App;
