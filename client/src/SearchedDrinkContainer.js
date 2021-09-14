
function SearchedDrinkContainer({drinks, searchValue}){
    const filteredDrinks = drinks.filter((drink) => {
        drink.includes(searchValue)
    })

    return(
        <div>
            {filteredDrinks}
        </div>
    )
}
export default SearchedDrinkContainer