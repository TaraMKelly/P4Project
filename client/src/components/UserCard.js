<<<<<<< HEAD
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

=======
import { Card } from 'semantic-ui-react'
import DrinkCardHome from './DrinkCardHome'


function UserCard({ user, setGetDrinkId, setUpdate, drinks, setDrinks }) {
>>>>>>> f0624c24c422a475836c66e64f414bbd0263b1fc

  return (
    <>
          <Card>
            <Card.Content>
              {user.drinks ? user.drinks.map((drink) => {
                return <DrinkCardHome setGetDrinkId={setGetDrinkId} setUpdate={setUpdate} key={drink.id} drinks={drinks} setDrinks={setDrinks} id={drink.id} name={drink.name} instructions={drink.instructions} ingredients={drink.ingredients} img_url={drink.img_url} custom={drink.custom} />
              }) : "Waiting for mix..."}
            </Card.Content>
          </Card>
    </>
  );
}

export default UserCard;