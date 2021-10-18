import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

function DrinkCard({id, name, ingredients, instructions, img_url, custom }) {
    const obj = { id: id, name: name, ingredients: ingredients, instructions: instructions, img_url: img_url, custom: custom }
    const [clicked, setClicked] = useState(true)
    const [userData, setUserData] = useState('')
    const [likes, setLikes] = useState(0)
    const [exists, setExists] = useState(false)
    let history = useHistory();

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => setUser(data))
        }, [])



    function handleImageClick(event) {
        setClicked(clicked => !clicked)
        if (clicked) {
            fetch(`/drinks/${event.target.name}`)
                .then(response => response.json())
                .then(data => {
                    let usernames = ''
                    data.users.map((user) => {
                        usernames += user.username + " "
                    })
                    setUserData([...userData, usernames])
                })
        }
        else {
            setUserData("")
        }
    }

    function handleDeleteDrink(e) {
        console.log("hello")
    }

    return (
        <Card>
            <Card.Content>
                <Image
                    size="massive"
                    floated="right"
                    src={img_url}
                    alt={name}
                    name={id}
                    onClick={handleImageClick}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Description><b>Ingredients:</b> {ingredients}</Card.Description>
                <Card.Description><b>Instructions:</b> {instructions}</Card.Description>
                <button name={id} onClick={handleDeleteDrink} >
                        ❌
                    </button>
            </Card.Content>
        </Card>
    )

}

export default DrinkCard