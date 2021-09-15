<<<<<<< HEAD
import {useState} from 'react'

function DrinkCard({ deletedDrink, id, drinks, setDrinks, name, ingredients, instructions, img_url, custom}){


    function handleDeleteDrink(event){
        console.log(event)
        fetch(`/drinks/${event.target.name}`, {
            method: 'DELETE',
            headers: { 
=======
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useState } from 'react'

function DrinkCard({ deletedDrink, id, drinks, setDrinks, name, ingredients, instructions, img_url, custom }) {

    function handleDeleteDrink(event) {
        console.log(event)
        fetch(`/drinks/${event.target.name}`, {
            method: 'DELETE',
            headers: {
>>>>>>> 6003a7b0063fb0e94328096c860495bba79da2f3
                Accept: 'application/json',
                "Content-Type": "application/json"
            }
        }).then((r) => {
            if (r.ok) {
<<<<<<< HEAD
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
=======
                deletedDrink(id);
            }
        });
    }
    return (
        <Card>
            <Card.Content>
                <Image
                    size="massive"
                    floated="right"
                    src={img_url}
                    alt={name}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Description><b>Ingredients:</b> {ingredients}</Card.Description>
                <Card.Description><b>Instructions:</b> {instructions}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Button circular icon='heart' />
                    0 likes
                </a>
                <a>
                    <Button onClick ={handleDeleteDrink} icon>
                        <Icon name='delete' />
                    </Button>
                </a>
                {{custom} ? <Icon name='glass martini' /> : null}
            </Card.Content>
        </Card>
>>>>>>> 6003a7b0063fb0e94328096c860495bba79da2f3
    )

}

export default DrinkCard