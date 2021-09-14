import {useState, useEffect} from 'react'
import DrinksList from '/DrinksList'
import DrinkForm from '/DrinkForm'

function DrinksContainer({drinks, setDrinks}){

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