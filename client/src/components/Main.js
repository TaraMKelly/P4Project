import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import UserCard from './UserCard'
import SearchBar from './SearchBar'
import UserContainer from './UserContainer'
import DrinkForm from './DrinkForm'
import DrinksContainer from './DrinksContainer'

function Main() {
  const [searchValue, setSearchValue] = useState("")
  const [drinks, setDrinks] = useState([])
  const [update, setUpdate] = useState(false)
  const [getId, setGetId] = useState();
  const [getDrinkId, setGetDrinkId] = useState()


  useEffect(() => {
    fetch('/drinks')
      .then(response => response.json())
      .then(data => setDrinks(data))
  }, [])

  useEffect(() => {
    fetch('/me')
    .then(response => response.json())
    .then(data => setGetId(data.id))
  }, [])

  console.log(drinks)
  const filteredDrinks = drinks.filter((drink) => {
    if(drink.name){
      return drink.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    }
  })
  //   if (drink.name) {
  //     return drink.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
  //   }
  // })

  function deletedDrink(deletedDrinkId) {
    setDrinks(drinks.filter((drink) => drink.id !== deletedDrinkId))
  }

  function updatedDrink(drinkId, updatedDrink) {
    drinks[drinkId] = updatedDrink
    setDrinks(drinks)
  }

  return (
    <>
      <Switch>
        <Route exact path="/home">
          <UserContainer />
        </Route>


        <Route exact path="/search">
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        </Route>


        <Route exact path="/feed">
          <DrinksContainer getDrinkId = {getDrinkId} setGetDrinkId = {setGetDrinkId} getId={getId} setGetId={setGetId} updatedDrink={updatedDrink} setUpdate={setUpdate} update={update} deletedDrink={deletedDrink} drinks={drinks} setDrinks={setDrinks} />
        </Route>


        <Route exact path="/create">
          <DrinkForm getDrinkId = {getDrinkId} setGetDrinkId = {setGetDrinkId} getId = {getId} setUpdate = {setUpdate} update = {update} drinks={drinks} setDrinks={setDrinks} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </>
  );
}

export default Main
