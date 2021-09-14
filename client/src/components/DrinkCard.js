import {useState} from 'react'

function DrinkCard({ deletedDrink, id, drinks, setDrinks, name, ingredients, instructions, img_url, custom}){


    function handleDeleteDrink(event){
        console.log(event)
        fetch(`/drinks/${event.target.name}`, {
            method: 'DELETE',
            headers: { 
                Accept: 'application/json',
                "Content-Type": "application/json"
            }
        }).then((r) => {
            if (r.ok) {
              deletedDrink(id);
            }
          });
    }

    return(
        <div>
            name: {name}
            ingredients: {ingredients}
            instructions: {instructions}
            <img src = {img_url} alt = {name}></img>
            custom: {custom.toString()}
            <button name = {id} onClick ={handleDeleteDrink}>Delete</button>
        </div>
    )

}

export default DrinkCard