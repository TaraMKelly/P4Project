import { Card, Image, Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

function DrinkCard({setGetDrinkId, setDrinks, drinks, setUpdate,  id, name, ingredients, instructions, img_url, custom }) {
    const obj = { id: id, name: name, ingredients: ingredients, instructions: instructions, img_url: img_url, custom: custom }
    const [clicked, setClicked] = useState(true)
    const [userData, setUserData] = useState('')
    const [likes, setLikes] = useState(0)
    let history = useHistory();

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => setUser(data))
        }, [])


    const addLikedDrink = {
        id: null,
        name: name,
        ingredients: ingredients,
        instructions: instructions,
        img_url: img_url,
        custom: custom
    }


    function handleLikeClick(event) {
        event.preventDefault()
        if(addLikedDrink.custom){
            fetch('/user_drinks', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    user_id: user.id,
                    drink_id: id
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }
        else{
        fetch('/drinks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(addLikedDrink)
            }).then(response => response.json())
            .then(data => {
                console.log(data)
                fetch('/user_drinks', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        user_id: user.id,
                        drink_id: data.id
                    })
                })
                .then(response => response.json())
                .then(data => console.log(data))
            })
        }
        console.log("POSTING!!!!!")
    }

    function handleUpdateDrink(event) {
        setGetDrinkId(event.target.attributes.name.nodeValue)
        setUpdate(true)
    }

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

    function handleDeleteDrink(event) {
        console.log(event)
        fetch(`/drinks/${event.target.name}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            }
        }).then((r) => {
            if (r.ok && drinks) {
                setDrinks(drinks.filter((drink) => drink.id !== id));
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
                    name={id}
                    onClick={handleImageClick}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Description><b>Ingredients:</b> {ingredients}</Card.Description>
                <Card.Description><b>Instructions:</b> {instructions}</Card.Description>
                <Card.Description><b>Users:</b>{userData}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Button type = "submit" icon="heart" onClick={handleLikeClick}/>
                    {`${likes} likes`}
                </a>
                <a>
                    <button name={id} onClick={handleDeleteDrink} >
                        ???
                    </button>
                    <button name={id} onClick={handleUpdateDrink} >
                        Update
                    </button>
                </a>
            </Card.Content>
        </Card>
    )

}

export default DrinkCard