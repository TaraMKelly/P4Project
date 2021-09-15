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
<<<<<<< HEAD
    if(drink.name){
      drink.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    }
  })

  function deletedDrink(deletedDrinkId){
=======
    return drink.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
  })
  //   if (drink.name) {
  //     return drink.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
  //   }
  // })

  function deletedDrink(deletedDrinkId) {
>>>>>>> 6003a7b0063fb0e94328096c860495bba79da2f3
    setDrinks(drinks.filter((drink) => drink.id !== deletedDrinkId))
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
            <DrinksContainer deletedDrink = {deletedDrink} drinks={drinks} setDrinks={setDrinks}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main