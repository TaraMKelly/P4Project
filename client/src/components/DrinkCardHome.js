import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

function DrinkCardHome({liked, setLiked, setGetDrinkId, setDrinks, drinks, getId, setUpdate, deletedDrink, id, name, ingredients, instructions, img_url, custom }) {
    const obj = { id: id, name: name, ingredients: ingredients, instructions: instructions, img_url: img_url, custom: custom }
    const [clicked, setClicked] = useState(true)
    const [userData, setUserData] = useState('')
    // const [canUpdate, setCanUpdate] = useState(false)
    const [likes, setLikes] = useState(0)
    const [exists, setExists] = useState(false)
    let history = useHistory();

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => setUser(data))
        }, [])


    // useEffect(() => {
    //     fetch(`/drinks/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             data.users.map((user) => {
    //                 if (user.id === getId) {
    //                     return setCanUpdate(true)
    //                 }
    //             })
    //         })
    // }, [getId])

    function handleDeleteDrink(event){
        event.preventDefault()
        fetch(`http://localhost:3000/delete_user_drinks`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                drink_id: id
            })
        }).then(response => response.json())
        .then(data => console.log(data))
        // .then(response => response.json())
        // .then(data => {
        //     const index = data.findIndex(userDrink => userDrink.user.id === user.id && userDrink.drink.id === id)
        //     console.log(index)
        //     if(index > -1){
        //         fetch(`http://localhost:3000/user_drinks/${index}`, {
        //             method: 'DELETE',
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 Accept: "application/json"
        //             }
        //         })
        //     }
        // })
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
                <button name={id }onClick={handleDeleteDrink} >
                        ❌
                    </button>
            </Card.Content>
        </Card>
    )

}

export default DrinkCardHome