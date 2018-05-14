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
var pcbluesRecipes = "_pcblues_recipebox"
var recipes= []
var selectedID = 0
var topID=0

class Recipe {
  constructor (thisKey) {
    
    this.key=thisKey
    this.name=newRecipeName
    this.description="Add ingredients here..."
  }


}


class App extends React.Component {
  
  constructor(props) {
    super(props)
    //this.onSort = this.onSort.bind(this)
    this.loadRecipes=this.loadRecipes.bind(this)
    this.addNewRecipe=this.addNewRecipe.bind(this)
    this.render = this.render.bind(this)

  }    
  
  getNewKey(){
    topID+=1
    return topID
  }

  componentWillMount() {
    this.loadRecipes()
  }

  componentDidMount(){
  }
  
  addNewRecipe() {
      // get from browser storage
     
    var thisRecipe = this.createNewRecipe()
    recipes.push(thisRecipe)      
       
    for (let recipe of recipes) {
      if (recipe.key>=topID) {
        topID=recipe.key+1
      }
    }
    ReactDOM.render(<App />, document.getElementById('root'));

  }

  loadRecipes() {
    // get from browser storage
    
    if (typeof(Storage)!=="undefined") {
      recipes= JSON.parse(window.localStorage.getItem(pcbluesRecipes))
    }

    if ((recipes==null) || (recipes==="null")) {
      recipes=[]
    }

    if (recipes.length===0) {
      this.addNewRecipe()      
    } 

    this.saveRecipes()
  }

  createNewRecipe() {
    var thisRecipe=new Recipe(this.getNewKey())
    return thisRecipe 
  }

  newTopID() {
    window.topID+=1
    return window.topID
  }

  getRecipeByKey(pKey){
    var keyInt = parseInt(pKey,10)
    var recipe = recipes.find(function(obj){
      return obj.key===keyInt
    })
    return recipe
  }

  saveRecipes() {
    if (typeof(Storage) !== "undefined") {
      window.localStorage.setItem(pcbluesRecipes,JSON.stringify(recipes))
    }
  }
  
  displayRecipe(pKey) {
    var rname = document.getElementById("taName")
    var dname = document.getElementById("taDescription")
    var recipe = this.getRecipeByKey(pKey)
    if (recipe!==null) {
      rname.value=recipe.name
      dname.value=recipe.description
    }
  }

  selectRecipe(event) {
    // if new recipe, create new recipe beneath
    selectedID = event.target.id
    var selectedRecipe = this.getRecipeByKey(selectedID)
    if (selectedRecipe.name===newRecipeName) {
      this.addNewRecipe()
    }
    
    var textBox = document.getElementById("taName")
    textBox.focus()
  }

  recipeButton(pName,pDescription,pKey) {
    return (
      <div key={pKey}>
        <button id={pKey} type="button" className="mo-butt btn btn-light" onMouseOver={e => this.displayRecipe(pKey)} onClick={e => this.selectRecipe(e) }>{pName}</button>
      </div>
    )
  }
  
  render() {
    return (
      <div id="mo-recipes text-center">
        <div className="mo-title">My Recipes</div>
          <div className="row">
          <div className="col-sm-4 panel panel-default mo-panel">
          
          {recipes.map(i => this.recipeButton(i.name,i.description,i.key))}

          

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
