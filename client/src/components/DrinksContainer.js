import {useState, useEffect} from 'react'
import { BrowserRouter as Route } from 'react-router-dom';
import DrinksList from './DrinksList'
import DrinkForm from './DrinkForm'

function DrinksContainer(){

    const [drinks, setDrinks] = useState([])
    useEffect(() => {
        fetch('/drinks')
        .then(response => response.json())
        .then(data => setDrinks(data))
    }, [])

    return (
        <div>
            <Route exact path="/drinks/new">
              <DrinkForm drinks={drinks} setDrinks={setDrinks} />
            </Route>
            <DrinksList drinks = {drinks} setDrinks = {setDrinks}/>
        </div>
      );


}

export default DrinksContainer;