// import {useState, useEffect} from 'react'
import { BrowserRouter as Route } from 'react-router-dom';
import DrinksList from './DrinksList'
import DrinkForm from './DrinkForm'
// import NewDrinkButton from './NewDrinkButton';
import { Container, Button, Grid } from 'semantic-ui-react'


function DrinksContainer({ getDrinkId, setGetDrinkId, getId, setGetId, setUpdate, update, deletedDrink, updatedDrink,  drinks, setDrinks }) {


  return (
    <>
      <Container>
         { update ? <DrinkForm getDrinkId = {getDrinkId} setGetDrinkId = {setGetDrinkId} getId = {getId} setUpdate = {setUpdate} update = {update} drinks={drinks} setDrinks={setDrinks} /> : ""}
          <DrinksList getDrinkId = {getDrinkId} setGetDrinkId = {setGetDrinkId} getId = {getId} setGetId = {setGetId} setUpdate = {setUpdate} update = {update} deletedDrink = {deletedDrink} updatedDrink = {updatedDrink} drinks = {drinks} setDrinks = {setDrinks}/>
      </Container>
    </>
  );


}

export default DrinksContainer;