import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import UserCard from './UserCard'
import SearchBar from './SearchBar'
import DrinksContainer from './DrinksContainer'
import { useState, useEffect } from 'react'

function Main() {
  const [searchValue, setSearchValue] = useState("")
  const [drinks, setDrinks] = useState([])



  useEffect(() => {
      fetch('/drinks')
      .then(response => response.json())
      .then(data => setDrinks(data))
  }, [])

  const filteredDrinks = drinks.filter((drink) => {
    if(drink.name){
      drink.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    }
  })

  function deletedDrink(deletedDrinkId){
    setDrinks(drinks.filter((drink) => drink.id !== deletedDrinkId))
  }

// const displayedPlants = plants.filter((plant) => {
//   return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
// });
  return (
    <>
      {/* <h1>Hello</h1> */}
      <Router>
        <Switch>
          {/* <Route path="/home">
            <UserCard />
          </Route> */}
          <Route path="/search">
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <DrinksContainer drinks={filteredDrinks} searchValue={searchValue} />
          </Route>
          <Route path="/feed">
            <DrinksContainer deletedDrink = {deletedDrink} drinks={drinks} setDrinks={setDrinks}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main