import DrinkCard from "./DrinkCard"
import { Grid } from 'semantic-ui-react'

function DrinksList({setGetId, update, setUpdate, drinks, updatedDrink, setDrinks, deletedDrink}){

    const allDrinks = drinks.map((drink) => {
        return <DrinkCard setGetId = {setGetId} setUpdate = {setUpdate} update = {update} updatedDrink = {updatedDrink} deletedDrink = {deletedDrink} drinks = {drinks} setDrinks = {setDrinks} id = {drink.id} key = {drink.id} name = {drink.name} ingredients = {drink.ingredients} instructions = {drink.instructions} img_url = {drink.img_url} custom = {drink.custom}/>
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