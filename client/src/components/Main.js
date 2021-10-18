import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import UserContainer from './UserContainer'
import DrinkForm from './DrinkForm'
import StyledDrinkForm from './StyledDrinkForm'
import DrinksContainer from './DrinksContainer'

function Main() {
  const [searchValue, setSearchValue] = useState("")
  const [drinks, setDrinks] = useState([])
  const [update, setUpdate] = useState(false)
  const [getId, setGetId] = useState();
  const [getDrinkId, setGetDrinkId] = useState()
  const [liked, setLiked] = useState(false)



  useEffect(() => {
    fetch('/drinks')
      .then(response => response.json())
      .then(data => setDrinks(data))
  }, [])

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
        <Route exact path="/">
          <UserContainer liked = {liked} setLiked = {setLiked} setGetDrinkId = {setGetDrinkId} setUpdate = {setUpdate} drinks = {drinks} setDrinks = {setDrinks}/>
        </Route>


        <Route exact path="/search">
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        </Route>


        <Route exact path="/feed">
          <DrinksContainer liked = {liked} setLiked = {setLiked} drinks = {drinks} setDrinks = {setDrinks} getDrinkId = {getDrinkId} setGetDrinkId = {setGetDrinkId} getId={getId} setGetId={setGetId} updatedDrink={updatedDrink} setUpdate={setUpdate} update={update} deletedDrink={deletedDrink} drinks={drinks} setDrinks={setDrinks} />
        </Route>


        <Route exact path="/create">
          <StyledDrinkForm getDrinkId = {getDrinkId} setGetDrinkId = {setGetDrinkId} getId = {getId} setUpdate = {setUpdate} update = {update} drinks={drinks} setDrinks={setDrinks} />
          {/* <DrinkForm getDrinkId = {getDrinkId} setGetDrinkId = {setGetDrinkId} getId = {getId} setUpdate = {setUpdate} update = {update} drinks={drinks} setDrinks={setDrinks} /> */}
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </>
  );
}

export default Main