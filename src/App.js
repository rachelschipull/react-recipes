import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

function App() {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('margarita')

  const getRecipes = async () => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    const data = await res.json()
    console.log(data.drinks)
    setRecipes(data.drinks)
  }

  useEffect(() => {
    getRecipes()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(drink =>(
        <Recipe title={drink.strDrink} image={drink.strDrinkThumb}/>
      ))}
    </div>
  );
}

export default App;
