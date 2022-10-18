import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

//const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}'&app_key=${process.env.REACT_APP_APP_KEY}`

const newReq = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/recipes/v2/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}'&app_key=${process.env.REACT_APP_APP_KEY}`

function App() {

  const getRecipes = async () => {
    const res = await fetch(newReq)
    const data = await res.json()
    console.log(data)
  }

  useEffect(() => {
    getRecipes()
  }, [])
  
  const [recipes, setRecipes] = useState([])

  return (
    <div className="App">
      <form className="search-form"> 
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe />
      ))}
    </div>
  );
}

export default App;
