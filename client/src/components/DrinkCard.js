import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useState } from 'react'

function DrinkCard({ setGetId, update, setUpdate, deletedDrink, id, updatedDrink, drinks, setDrinks, name, ingredients, instructions, img_url, custom }) {
    const obj = {id: id, name: name, ingredients: ingredients, instructions: instructions, img_url: img_url, custom: custom}
    const [likes, setLikes] = useState(0)

    const addLikedDrink = {
        name: name,
        ingredients: ingredients,
        instructions: instructions,
        img_url: img_url,
        custom: true
    }

    console.log(obj, "obj")
    function handleUpdateDrink(event){
        setGetId(id)
        setUpdate(true)
    }

    function handleImageClick(event){
        fetch(`/drinks/${event.target.parentElement.name}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    function handleDeleteDrink(event) {
        console.log(event)
        fetch(`/drinks/${event.target.parentElement.name}`, {
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

    function handleLikeClick(event){
        incrementLikes()
        // fetch('/drinks', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json"
        //     },
        //     body: JSON.stringify(addLikedDrink)
        //     }).then(response => response.json())
        //     .then(data => {console.log(data)})
        //     console.log("POSTING!!!!!")
    }



    function incrementLikes() {
        setLikes(likes + 1)
    }
    return (
        <Card>
            <Card.Content>
                <Image
                    size="massive"
                    floated="right"
                    src={img_url}
                    alt={name}
                    onClick = {handleImageClick}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Description><b>Ingredients:</b> {ingredients}</Card.Description>
                <Card.Description><b>Instructions:</b> {instructions}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Button circular icon='heart' onClick ={handleLikeClick}/>
                    {`${likes} likes`}
                </a>
                <a>
                    <Button name = {id} onClick ={handleDeleteDrink} icon>
                        <Icon name='delete' />
                    </Button>

                    <Button name = {id} onClick ={handleUpdateDrink} icon>
                        Update
                    </Button>
                </a>
                {{custom} ? <Icon name='glass martini' /> : null}
            </Card.Content>
        </Card>
    )

}

export default DrinkCard