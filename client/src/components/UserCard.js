import { Container, Grid } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import DrinkCard from './DrinkCard'


function UserCard() {
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
            <Card.Description><b>Your Custom Drinks:</b> {user.drinks ? user.drinks.map((drink) => {
              return <DrinkCard name={drink.name} instructions={drink.instructions} ingredients={drink.ingredients} img_url={drink.img_url} custom={drink.custom} />
            }) : "Waiting for mix..."}
            </Card.Description>
            <Card.Description>
              <b>Your Favorite Drinks:</b>
            </Card.Description>
          </Card.Content>
        </Card>
      </Container>
    </>
  );


}

export default UserCard;