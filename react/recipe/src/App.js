import React from 'react';
import './App.css';

/*

To do:
trace multiple calls to render that result in recipes being undefined
mock screen
local storage
changing focus
check if recipe with same name exists (use name as key)


Requirements:
User Story: I can create recipes that have names and ingredients.

User Story: I can see an index view where the names of all the recipes are visible.

User Story: I can click into any of those recipes to view it.

User Story: I can edit these recipes.

User Story: I can delete these recipes.

User Story: All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.

Hint: You should prefix your local storage keys on CodePen, i.e. _username_recipes
*/
var newRecipeName = "New Recipe"

const newRecipe = {
  key: newRecipeName,
  name: newRecipeName,
  description: "Add ingredients here..."
}

var pcbluesRecipes = "_pcblues_recipebox"
var recipes= null

class App extends React.Component {
  
  constructor(props) {
    super(props)
    //this.onSort = this.onSort.bind(this)
    this.state = {recipes:null }
    this.loadRecipes=this.loadRecipes.bind(this)
    this.getRecipes = this.getRecipes.bind(this)
    this.render = this.render.bind(this)

  }    
  
  componentWillMount() {
    recipes=this.getRecipes()
  }

  componentDidMount(){
  }
  
  loadRecipes() {
    // get from browser storage
    var theRecipes=null
    if (typeof(Storage)!=="undefined") {
       theRecipes=window.localStorage.getItem(pcbluesRecipes)
    }

    if (theRecipes==null) {
      theRecipes=[]
    }

    if (theRecipes.length===0) {
      var thisRecipe = Object.create(newRecipe)
      theRecipes.push(thisRecipe)
    }

    this.setState({recipes:theRecipes})  
    return theRecipes   
  }

  getRecipeByName(pName){
    return recipes.find(function(obj){
      return obj.name===pName
    })
  }

  getRecipes() {
    var theRecipes = this.state.recipes
    if (theRecipes==null) {
      return this.loadRecipes()
    }
  }
  
  saveRecipes() {
    if (typeof(Storage) !== "undefined") {
      window.localStorage.setItem(pcbluesRecipes,this.state.recipes)
    }
  }
  
  displayRecipe(pName) {
    var rname = document.getElementById("taName")
    var dname = document.getElementById("taDescription")
    var recipe = this.getRecipeByName(pName)
    if (recipe!==null) {
      rname.innerHTML=recipe.name
      dname.innerHTML=recipe.description
    }
  }

  selectRecipe(event) {
    // if new recipe, create new recipe beneath
  }

  recipeButton(pName,pDescription) {
    return (
      <div>
        <button type="button" className="mo-butt btn btn-light" onMouseOver={e => this.displayRecipe(pName)} onClick={e => this.selectRecipe(pName) }>{pName}</button>
      </div>
    )
  }
  
  render() {
    return (
      <div id="mo-recipes text-center">
        <div className="mo-title">My Recipes</div>
          <div className="row">
          <div className="col-sm-4 panel panel-default mo-panel">
          
          {recipes.map(i => this.recipeButton(i.name,i.description))}

          

            </div>   
          <div className="col-sm-8 panel panel-default mo-panel">
            <textarea id="taName"  rows="1"/><br/>   
            <textarea id="taDescription" cols="40" rows="8"/><br/>
                   
          </div>
        </div>
      </div>
     
     )
  }
  
}


export default App;
