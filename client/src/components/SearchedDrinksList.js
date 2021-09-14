import DrinkCard from "./DrinkCard"

function SearchedDrinksList({drinks, setDrinks}){

    console.log(drinks)
    const allDrinks = drinks.map((drink) => {
        return <DrinkCard key = {drink.idDrink} name = {drink.strDrink} ingredients = {drink.strIngredient1} img_url = {drink.strDrinkThumb} custom = {false}/>
    })
    return (
        <div>
            {allDrinks}
        </div>
    )
}

export default SearchedDrinksList;