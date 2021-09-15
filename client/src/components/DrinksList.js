import DrinkCard from "./DrinkCard"
<<<<<<< HEAD
import {useState} from 'react'
=======
import { Grid } from 'semantic-ui-react'
>>>>>>> 6003a7b0063fb0e94328096c860495bba79da2f3

function DrinksList({drinks, setDrinks, deletedDrink}){

    const allDrinks = drinks.map((drink) => {
        return <DrinkCard deletedDrink = {deletedDrink} drinks = {drinks} setDrinks = {setDrinks} id = {drink.id} key = {drink.id} name = {drink.name} ingredients = {drink.ingredients} instructions = {drink.instructions} img_url = {drink.img_url} custom = {drink.custom}/>
    })
    return (
        <Grid
            columns={4}
            padded
        >
            <Grid.Column>
                {allDrinks}
            </Grid.Column>
        </Grid>
    )
}

export default DrinksList