import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserCard from 'UserCard'
import SearchBar from 'SearchBar'
import SearchedDrinkContainer from 'SearchedDrinkContainer'
import DrinksContainer from 'DrinksContainer'
import Login from '/Login'
import {useState} from 'react'

function Main() {
  const [searchValue, setSearchValue] = "";
  const [drinks, setDrinks] = useState([])
    useEffect(() => {
        fetch('/drinks')
        .then(response => response.json())
        .then(data => setDrinks(data))
    }, [])

  return (
    <Router>
      <Switch>
      <Route path="/home">
          <UserCard />
        </Route>
        <Route path="/search">
          <SearchBar searchValue = {searchValue} setSearchValue = {setSearchValue}/>
          <SearchedDrinkContainer drinks = {drinks} searchValue = {searchValue}/>
        </Route>
        <Route path="/feed">
          <DrinksContainer drinks = {drinks} setDrinks = {setDrinks}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Main