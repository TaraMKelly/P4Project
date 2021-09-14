// import {useState, useEffect} from 'react'
import { BrowserRouter as Route } from 'react-router-dom';
import DrinksList from './DrinksList'
import DrinkForm from './DrinkForm'
import NewDrinkButton from './NewDrinkButton';
import { Container, Button, Grid } from 'semantic-ui-react'


function DrinksContainer({ drinks, setDrinks }) {


  return (
    <>
      <Container>
      <Button> <NewDrinkButton /></Button>
      <Route exact path="/drinks/new">
        <DrinkForm drinks={drinks} setDrinks={setDrinks} />
      </Route>
          <DrinksList drinks={drinks} setDrinks={setDrinks} />
      </Container>
    </>
  );


}

export default DrinksContainer;