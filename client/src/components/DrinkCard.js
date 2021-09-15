import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useState } from 'react'

function DrinkCard({ setGetId, update, setUpdate, deletedDrink, id, updatedDrink, drinks, setDrinks, name, ingredients, instructions, img_url, custom }) {
    const obj = {id: id, name: name, ingredients: ingredients, instructions: instructions, img_url: img_url, custom: custom}
    const [clicked, setClicked] = useState(true)
    const [userData, setUserData] = useState('')
    console.log(obj, "obj")
    function handleUpdateDrink(event){
        setGetId(id)
        setUpdate(true)
    }

    function handleImageClick(event){
        setClicked(clicked => !clicked)
        if(clicked){
            fetch(`/drinks/${event.target.attributes.name.nodeValue}`)
            .then(response => response.json())
            .then(data => {
                let usernames = ''
                data.users.map((user) => {
                    usernames += user.username + " "
                })
                setUserData([...userData, usernames])
            })
        }
        else{
            setUserData("")
        }
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
    return (
        <Card>
            <Card.Content>
                <Image
                    size="massive"
                    floated="right"
                    src={img_url}
                    alt={name}
                    name = {id}
                    onClick = {handleImageClick}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Description><b>Ingredients:</b> {ingredients}</Card.Description>
                <Card.Description><b>Instructions:</b> {instructions}</Card.Description>
                <Card.Description><b>Users:</b>{userData}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Button circular icon='heart' />
                    0 likes
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