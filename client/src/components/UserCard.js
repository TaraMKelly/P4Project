import { Container} from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import DrinkCardHome from './DrinkCardHome'


function UserCard({setGetDrinkId, setUpdate, drinks, setDrinks}) {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('/me')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])


  return (
    <>
      <Container>
        <Card>
          <Card.Content>
            <Card.Header>{`Hello ${user.username}!`}</Card.Header>
            <Card.Description><b>Your Favorite Drinks:</b> {user.drinks ? user.drinks.map((drink) => {
              return <DrinkCardHome setGetDrinkId = {setGetDrinkId} setUpdate = {setUpdate} key = {drink.id} drinks = {drinks} setDrinks = {setDrinks} id = {drink.id} name={drink.name} instructions={drink.instructions} ingredients={drink.ingredients} img_url={drink.img_url} custom={drink.custom} />
            }) : "Waiting for mix..."}
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    </>
  );


}

export default UserCard;