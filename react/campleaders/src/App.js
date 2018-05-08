import React from 'react';
import './App.css';
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
    this.onSort = this.onSort.bind(this)
    this.loadCampers = this.loadCampers.bind(this)
    this.showMyGrid=this.showMyGrid.bind(this)
    this.getIcon=this.getIcon.bind(this)
    this.state = { sort30Dir : 2, 
              sortAllDir : 2,
              campers30 : []}
  

  }    

 

  onSort(event, sortKey){
    /*
    assuming your data is something like
    [
      {accountname:'foo', negotiatedcontractvalue:'bar'},
      {accountname:'monkey', negotiatedcontractvalue:'spank'},
      {accountname:'chicken', negotiatedcontractvalue:'dance'},
    ]
    */
    const campers = this.state.campers30;
    var newSort30Dir = this.state.sort30Dir
    var newSortAllDir = this.state.sortAllDir
    if (sortKey==="recent") {
      newSort30Dir = Math.abs(newSort30Dir-1)
      newSortAllDir = 2

      if (newSort30Dir===0) {
        campers.sort((a,b) => this.doCompare(b[sortKey],a[sortKey]))
      } else if (newSort30Dir===1) {
        campers.sort((a,b) => this.doCompare(a[sortKey],b[sortKey]))
      }
  
    } else {
      newSortAllDir = Math.abs(newSortAllDir-1)
      newSort30Dir = 2
      if (newSortAllDir===0) {
        campers.sort((a,b) => this.doCompare(b[sortKey],a[sortKey]))
      } else if (newSortAllDir===1) {
        campers.sort((a,b) => this.doCompare(a[sortKey],b[sortKey]))
      }
    }
    this.setState({campers30:campers,
                  sort30Dir:newSort30Dir,
                  sortAllDir:newSortAllDir})
  }

  doCompare(a,b) {
    if (a===b) {
      return 0
    } else if (a<b) {
      return -1
    } else 
    return 1
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
      <th >
          
          </th>
      <th>
      Name
      </th>
      <th  onClick={e => this.onSort(e, "recent")}>
      Last 30 Days &nbsp;{this.getIcon("recent")}
      </th>
      <th onClick={e => this.onSort(e, "alltime")}>
      All Time &nbsp; {this.getIcon("alltime")}
      </th>
          </tr>
    )
  }

  getIcon(col) {
    if (col==="recent") {
      if (this.state.sort30Dir===0){
        return (<span className="glyphicon glyphicon-triangle-bottom"/>)
      } else if (this.state.sort30Dir===1){
        return (<span className="glyphicon glyphicon-triangle-top"/>)
      }
    } else {
      if (this.state.sortAllDir===0){
        return (<span className="glyphicon glyphicon-triangle-bottom"/>)
      } else if (this.state.sortAllDir===1) {
        return (<span className="glyphicon glyphicon-triangle-top"/>)
      }        
    }
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
      <div id="mo-board ">
        <span className="mo-title">Camper Leaderboard</span>
        {this.showMyGrid()}
      </div>
     )
  }
  
}

class MyRow extends React.Component {
  render() {
    return (
      <tr >
    <td >
      <img alt={this.props.username} src={this.props.img} height="42" width="42"></img>
    </td>
    <td >
      {this.props.username}
      </td>
    <td className="mo-glyph-col-30">
    {this.props.recent}
    </td>
    <td className="mo-glyph-col-all" >
    {this.props.alltime}
    </td>
  
    </tr>
    )
  }
}


export default App;
