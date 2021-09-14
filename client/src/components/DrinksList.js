import DrinkCard from "./DrinkCard"
import { Grid } from 'semantic-ui-react'

function DrinksList({drinks, setDrinks}){

    console.log(drinks)
    const allDrinks = drinks.map((drink) => {
        return <DrinkCard key = {drink.id} name = {drink.name} ingredients = {drink.ingredients} img_url = {drink.img_url} custom = {drink.custom}/>
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

export default DrinksList;