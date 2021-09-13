function DrinkCard({name, ingredients, img_url, custom}){

    return(
        <div>
            name: {name}
            ingredients: {ingredients}
            <img src = {img_url} alt = {name}></img>
            custom: {custom}
        </div>
    )

}

export default DrinkCard