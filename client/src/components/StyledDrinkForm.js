import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input, FormField, Label, Error } from "../styles";
import styled from "styled-components";


function DrinkForm({ setGetDrinkId, getDrinkId, getId, setUpdate, update, drinks, setDrinks }) {
    let history = useHistory();
    console.log(update)
    const [addDrink, setAddDrink] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        img_url: '',
        custom: true,
    })
    let updated = update

    console.log(getDrinkId)


    useEffect(() => {
        if (updated) {
            console.log("hi")
            console.log(getDrinkId)
            const clickedDrink = drinks.find(drink => drink.id == getDrinkId)
            console.log(clickedDrink, "clicked")
            setAddDrink(clickedDrink)
        }
    }, [])


    function handleNewDrink(e) {
        let key = e.target.name
        let value = e.target.value
        setAddDrink({
            ...addDrink,
            [key]: value,
        })
        updated = !updated
    }

    function handleFormSubmit(e) {
        console.log(addDrink)
        e.preventDefault();
        if (!update) {
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
                        name: '',
                        ingredients: '',
                        instructions: '',
                        img_url: '',
                        custom: true
                    })
                    console.log(data)
                    history.push('/feed')
                    fetch('/user_drinks', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: JSON.stringify({
                            user_id: getId,
                            drink_id: data.id
                        })
                    })
                        .then(response => response.json())
                        .then(console.log(data))
                })
        }
        else {
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
                        name: '',
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
        <Wrapper>
            <Logo>Share a drink</Logo>
            <form onSubmit={handleFormSubmit}>
                <FormField>
                    <Label>Drink Name</Label>
                    <Input type="text" name="name" value={addDrink.name} placeholder="name" onChange={handleNewDrink} />
                </FormField>
                <FormField>
                    <Label>Ingredients</Label>
                    <Input type="text" name="ingredients" value={addDrink.ingredients} placeholder="ingredients" onChange={handleNewDrink} />
                </FormField>
                <FormField>
                    <Label>Instructions</Label>
                    <Input type="text" name="instructions" value={addDrink.instructions} placeholder="instructions" onChange={handleNewDrink} />
                </FormField>
                <FormField>
                    <Label>Add a Picture</Label>
                    <Input type="text" name="img_url" value={addDrink.img_url} placeholder="image url" onChange={handleNewDrink} />
                </FormField>
                <div>
                    <button type="submit" className="submit-input">Submit</button>
                </div>

            </form>
        </Wrapper>
    )
}
const Logo = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: 2rem;
  color: black;
  margin: 8px 0 16px;
`;
const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
  `;

export default DrinkForm