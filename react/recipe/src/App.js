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
var newRecipeDescription =  "Add ingredients here..."
var pcbluesRecipes = "_pcblues_recipebox"
var recipes= []
var selectedID = 0
var topID=0
var buttPrefix="butt"
var delButtPrefix="delButt"
var delDivPrefix="delDiv"
var taName = "taName"
var taDescription = "taDescription"

class Recipe {
  constructor (thisKey) {
    
    this.key=thisKey
    this.name=""
    this.description=""
  }


}


class App extends React.Component {
  
  constructor(props) {
    super(props)
    //this.onSort = this.onSort.bind(this)
    this.loadRecipes=this.loadRecipes.bind(this)
    this.addNewRecipe=this.addNewRecipe.bind(this)
    this.displayRecipe=this.displayRecipe.bind(this)
    this.render = this.render.bind(this)
    this.state = {recipes:[]}
  }    
  
  getNewKey(){
    topID+=1
    return topID
  }

  componentWillMount() {
    this.loadRecipes()
  }

  componentDidMount(){
    this.disableText()
  }

  componentWillUnmount() {
    this.saveRecipes()
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
    thisRecipe.key=topID
    this.setState({recipes:recipes})
    this.saveRecipes()
  }

  loadRecipes() {
    // get from browser storage
    
    if (typeof(Storage)!=="undefined") {
      recipes= JSON.parse(window.localStorage.getItem(pcbluesRecipes))
    }

    if ((recipes==null) || (recipes==="null")) {
      recipes=[]
    }

    if (recipes.length==0) {
      this.addNewRecipe()      
    } 

    this.setState({recipes:recipes})
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
    if (isNaN(pKey)) {
      pKey=pKey.replace(/\D/g,'')
    }
    var keyInt = parseInt(pKey,10)
    var recipe = recipes.find(function(obj){
      return obj.key===keyInt
    })
    return recipe
  }

  deleteAllRecipes() {
    recipes = []
    if (typeof(Storage) !== "undefined") {
      window.localStorage.setItem(pcbluesRecipes,JSON.stringify(recipes))
    }   
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

    for (var c=0; c<recipes.length;c++) {
      var butt = document.getElementById(delButtPrefix+recipes[c].key)
      if (butt!==null) {
        if (butt.id===delButtPrefix+pKey) {
          butt.className = "mo-butt-delete-show btn btn-light"
        } else {
          butt.className = "mo-butt-delete-hide btn btn-light"
        }          
        this.disableText()
    
      }
    }
  }

  disableText() {
    var rname = document.getElementById("taName")
    var dname = document.getElementById("taDescription")

    rname.disabled=true
    dname.disabled=true

  }

  enableText(){
    var rname = document.getElementById("taName")
    var dname = document.getElementById("taDescription")

    rname.disabled=false
    dname.disabled=false

  }

checkForNewRecipe() {
  var newRecipeCount=0
  for (var c=0;c<recipes.length;c++) {
    if (recipes[c].name=="") {
      newRecipeCount++
    }
  }
  if (newRecipeCount==0) {
    this.addNewRecipe()
  }
}

  selectRecipe(event) {
    // if new recipe, create new recipe beneath
    selectedID = event.target.id
    var selectedRecipe = this.getRecipeByKey(selectedID)
    // check if only one button has newRecipeName
    this.checkForNewRecipe()    
    this.enableText()
    var textBox = document.getElementById("taName")
    textBox.focus()
  }

  deleteRecipe(event){
    selectedID = event.target.id
    var selectedRecipe=this.getRecipeByKey(selectedID)
    if (selectedRecipe!==null){
      for (var c=recipes.length-1;c>=0;c--) {
        if (recipes[c].key===selectedRecipe.key) {
          recipes.splice(c,1)
        }
      }
      if (recipes.length===0) {
        this.addNewRecipe()
      }
      this.saveRecipes()
      this.setState({recipes:recipes})
    }
  }

  displayName(pName) {
    if (pName==="") {
      return newRecipeName
    } else {
      return pName
    }
  }
  recipeButton(pName,pDescription,pKey) {
    return (
      <div key={pKey}>
              <div className="row ">
          <div className="col-xs-9 ">
        <button id={buttPrefix+pKey} type="button" className="mo-butts mo-butt btn btn-light" onMouseOver={e => this.displayRecipe(pKey)} onClick={e => this.selectRecipe(e) }>{this.displayName(pName)}     
        </button>
        </div>
        <div id={delDivPrefix+pKey}  className="col-xs-3 ">        
        <button id={delButtPrefix+pKey}  onClick={e => this.deleteRecipe(e) } className="mo-butt mo-butt-delete-hide btn btn-light">X</button>
        </div>
        </div>
      </div>
    )
  }
  
  updateRecipe(event) {

    var currentRecipe = this.getRecipeByKey(selectedID)
    if (currentRecipe!==null) {
      if (event.target.id===taName) {
        currentRecipe.name = event.target.value
      } else if (event.target.id===taDescription) {
        currentRecipe.description = event.target.value
      }
      this.saveRecipes()
      this.setState({recipes:recipes}) 
      this.checkForNewRecipe()  }
  }

  render() {
    return (
      <div id="mo-recipes text-center">
        <div className="mo-title">My Recipes</div>
          <div className="row">
          <div className="col-sm-4 panel panel-default mo-panel">
          {recipes.map(i => this.recipeButton(i.name,i.description,i.key))}
            </div>   
          <div className="col-sm-7 panel panel-default mo-panel">
            <textarea onChange={e => this.updateRecipe(e)}  id={taName}  rows="1" placeholder={newRecipeName}/><br/>   
            <textarea onChange={e => this.updateRecipe(e)}  id={taDescription} cols="40" rows="8" placeholder ={newRecipeDescription}/><br/>
                   
          </div>
        </div>
      </div>
     
     )
  }
  
}


export default App;
