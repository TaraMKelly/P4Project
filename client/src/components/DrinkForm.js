import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'


function DrinkForm({setGetDrinkId, getDrinkId, getId, setUpdate, update, drinks, setDrinks}){
    let history = useHistory();
    console.log(update)
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => setUser(data))
        }, [])

    const [addDrink, setAddDrink] = useState({
        id: null,
        name:'',
        ingredients: '',
        instructions: '',
        img_url: '',
        custom: true,
    })
    let updated = update

    console.log(getDrinkId)


    useEffect(() => {
        if(updated){
            console.log("hi")
            console.log(getDrinkId)
            const clickedDrink = drinks.find(drink => drink.id == getDrinkId)
            console.log(clickedDrink, "clicked")
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
                    console.log(data)
                history.push('/feed')
                history.push('/home')
                fetch('/user_drinks', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        user_id: user.id,
                        drink_id: data.id
                    })})
                    .then(response => response.json())
                    .then(console.log(data))
                })
        }
        else{
            fetch(`/drinks/${getDrinkId}`, {
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
                history.push('/home')
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