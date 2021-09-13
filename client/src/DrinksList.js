function DrinksList({drinks, setDrinks}){
    const allDrinks = drinks.map((drink) => {
        <DrinkCard key = {drink.id} name = {drink.name} ingredients = {drink.ingredients} img_url = {drink.img_url} custom = {drink.custom}/>
    })
}

export default DrinksList;