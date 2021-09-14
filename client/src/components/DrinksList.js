import DrinkCard from "./DrinkCard"
import {useState} from 'react'

function DrinksList({drinks, setDrinks, deletedDrink}){

    const allDrinks = drinks.map((drink) => {
        return <DrinkCard deletedDrink = {deletedDrink} drinks = {drinks} setDrinks = {setDrinks} id = {drink.id} key = {drink.id} name = {drink.name} ingredients = {drink.ingredients} instructions = {drink.instructions} img_url = {drink.img_url} custom = {drink.custom}/>
    })
    return (
        <div>
            {allDrinks}
        </div>
    )
}

export default DrinksList