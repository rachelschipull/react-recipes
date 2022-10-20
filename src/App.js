import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

function App() {

  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
    const data = await res.json()
    console.log(data.drinks)
    setRecipes(data.drinks)
  }

  useEffect(() => {
    getRecipes()
  }, [])

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
