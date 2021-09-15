import DrinkCard from "./DrinkCard"
import { useEffect, useState } from "react";

function SearchedDrinksList({drinks, setDrinks}){

    const newDrinksArr = drinks.map(drink => {
        const ingredientsArr = []
        for (const [key, value] of Object.entries(drink)) {
            if (key.includes('strIngredient') && value) {
                ingredientsArr.push(value)
            }
        }
        return {[drink.strDrink]: ingredientsArr.join(", ")}
    })

    const newDrinks = Object.assign({}, ...newDrinksArr)

  
    const allDrinks = drinks.map((drink) => {
        return <DrinkCard key = {drink.idDrink} name = {drink.strDrink} instructions = {drink.strInstructions} ingredients = {newDrinks[drink.strDrink]} img_url = {drink.strDrinkThumb} custom = {false}/>
    })
    return (
        <div>
            {allDrinks}
        </div>
    )
}

export default SearchedDrinksList;