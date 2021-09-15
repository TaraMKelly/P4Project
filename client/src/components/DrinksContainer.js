// import {useState, useEffect} from 'react'
import { BrowserRouter as Route } from 'react-router-dom';
import DrinksList from './DrinksList'
import DrinkForm from './DrinkForm'
import NewDrinkButton from './NewDrinkButton';
import { Container, Button, Grid } from 'semantic-ui-react'

<<<<<<< HEAD
function DrinksContainer({deletedDrink, drinks, setDrinks}){

    return (
        <div>
            <Route exact path="/drinks/new">
              <DrinkForm drinks={drinks} setDrinks={setDrinks} />
            </Route>
            <DrinksList deletedDrink = {deletedDrink} drinks = {drinks} setDrinks = {setDrinks}/>
        </div>
      );
=======

function DrinksContainer({deletedDrink, drinks, setDrinks }) {


  return (
    <>
      <Container>
      <Button> <NewDrinkButton /></Button>
      <Route exact path="/drinks/new">
        <DrinkForm drinks={drinks} setDrinks={setDrinks} />
      </Route>
          <DrinksList deletedDrink = {deletedDrink} drinks = {drinks} setDrinks = {setDrinks}/>
      </Container>
    </>
  );
>>>>>>> 6003a7b0063fb0e94328096c860495bba79da2f3


}

export default DrinksContainer;