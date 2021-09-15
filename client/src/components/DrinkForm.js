import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'


function DrinkForm({getId, setUpdate, update, drinks, setDrinks}){
    let history = useHistory();
    const [addDrink, setAddDrink] = useState({
        name:'',
        ingredients: '',
        instructions: '',
        img_url: '',
        custom: true
    })
    
    let updated = update

    useEffect(() => {
        if(updated){
            const clickedDrink = drinks.find(drink => drink.id === getId)
            setAddDrink(clickedDrink)
        }
    }, [])


    function handleNewDrink(e){
            let key = e.target.name
            let value = e.target.value
            setAddDrink({
                ...addDrink,
                [key]: value,
            })
            updated = !updated
    }

    function handleFormSubmit(e){
        console.log(addDrink)
        e.preventDefault();
        if(!update){
            fetch('/drinks', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(addDrink)
                })
                .then(response => response.json())
                .then(data => {
                    setDrinks([data, ...drinks])
                    setAddDrink({
                        name:'',
                        ingredients: '',
                        instructions: '',
                        img_url: '',
                        custom: true
                    })
                history.push('/feed')
            })
        }
        else{
            fetch(`/drinks/${getId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(addDrink)
            }).then(response => response.json())
            .then(data => {
                    let updatedId = drinks.findIndex(drink => drink.id === data.id)
                    drinks[updatedId] = data
                    setDrinks(drinks)
                    setAddDrink({
                        name:'',
                        ingredients: '',
                        instructions: '',
                        img_url: '',
                        custom: true
                    })
                    setUpdate(false)
                history.push('/feed')
            })
        }
    }
    return (
    <form onSubmit ={handleFormSubmit}> 
        <input type= "text" name = "name" value = {addDrink.name} placeholder = "name" onChange={handleNewDrink}></input>
        <input type= "text" name = "ingredients" value = {addDrink.ingredients} placeholder = "ingredients" onChange={handleNewDrink}></input>
        <input type= "text" name = "instructions" value = {addDrink.instructions} placeholder = "instructions" onChange={handleNewDrink}></input> 
        <input type= "text" name = "img_url" value = {addDrink.img_url} placeholder = "image url" onChange={handleNewDrink}></input> 
        <div>
            <button type="submit" className="submit-input">Submit</button>
        </div>
       
    </form>)
}

export default DrinkForm