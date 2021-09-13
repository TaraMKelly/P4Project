import DrinkCard from "./DrinkCard"

function DrinksList({drinks, setDrinks}){

    console.log(drinks)
    const allDrinks = drinks.map((drink) => {
        return <DrinkCard key = {drink.id} name = {drink.name} ingredients = {drink.ingredients} img_url = {drink.img_url} custom = {drink.custom}/>
    })
    return (
        <div>
            {allDrinks}
        </div>
    )
}

export default DrinksList;