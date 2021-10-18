import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
// import styled from "styled-components";

<<<<<<< HEAD
function DrinkCard({id, name, ingredients, instructions, img_url, custom }) {
=======
function DrinkCardHome({liked, setLiked, setGetDrinkId, setDrinks, drinks, getId, setUpdate, deletedDrink, id, name, ingredients, instructions, img_url, custom }) {
>>>>>>> f0624c24c422a475836c66e64f414bbd0263b1fc
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
// const ContentBox = styled.div`
//   display: flex;
//   gap: 0.25rem;
//   padding: 0.25rem;
//   flex-wrap: wrap;
//   align-items: center;
//   grid-area: content;
//   justify-content: center;
// `;

export default DrinkCardHome