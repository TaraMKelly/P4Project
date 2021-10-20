import { Card } from 'semantic-ui-react'
import DrinkCardHome from './DrinkCardHome'


function UserCard({ user, setGetDrinkId, setUpdate, drinks, setDrinks }) {

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