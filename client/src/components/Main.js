import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import UserCard from './UserCard'
import SearchBar from './SearchBar'
import DrinksContainer from './DrinksContainer'
import { useState, useEffect } from 'react'

function Main() {
  const [searchValue, setSearchValue] = useState("")
  const [drinks, setDrinks] = useState([])
  const [update, setUpdate] = useState(false)
  const [getId, setGetId] = useState();





  useEffect(() => {
    fetch('/drinks')
      .then(response => response.json())
      .then(data => setDrinks(data))
  }, [])

  console.log(drinks)
  const filteredDrinks = drinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
  })
  //   if (drink.name) {
  //     return drink.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
  //   }
  // })

  function deletedDrink(deletedDrinkId) {
    setDrinks(drinks.filter((drink) => drink.id !== deletedDrinkId))
  }

  function updatedDrink(drinkId, updatedDrink){
    drinks[drinkId] = updatedDrink
    setDrinks(drinks)
  }

  return (
    <>
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
            <DrinksContainer getId = {getId} setGetId = {setGetId} updatedDrink = {updatedDrink} setUpdate = {setUpdate} update = {update} deletedDrink = {deletedDrink} drinks={drinks} setDrinks={setDrinks}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main
