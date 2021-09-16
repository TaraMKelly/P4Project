import DrinkCard from "./DrinkCard"
import { Grid } from 'semantic-ui-react'
import {useState, useEffect} from 'react'

function DrinksList({getDrinkId, setGetDrinkId, getId, setGetId, update, setUpdate, drinks, updatedDrink, setDrinks, deletedDrink}){

    console.log(getId)
    const allDrinks = drinks.map((drink) => {
        return <DrinkCard getDrinkId = {getDrinkId} setGetDrinkId = {setGetDrinkId} getId = {getId} setGetId = {setGetId} setUpdate = {setUpdate} update = {update} updatedDrink = {updatedDrink} deletedDrink = {deletedDrink} drinks = {drinks} setDrinks = {setDrinks} id = {drink.id} key = {drink.id} name = {drink.name} ingredients = {drink.ingredients} instructions = {drink.instructions} img_url = {drink.img_url} custom = {drink.custom}/>
    })
    return (

            <>
                {allDrinks}
            </>

    )
}

export default DrinksList