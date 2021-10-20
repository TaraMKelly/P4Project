import { useState, useEffect } from 'react'
import UserCard from './UserCard';
import { Container } from 'semantic-ui-react'


function UserContainer({ liked, setLiked, setGetDrinkId, setUpdate, drinks, setDrinks }) {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('/me')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  return (
    <>
      <Container> 
        <h1>{`Hello ${user.username}!`}</h1>
        <h3><b>Your Favorite Drinks:</b> </h3>
          <UserCard user={user} liked={liked} setLiked={setLiked} setGetDrinkId={setGetDrinkId} setUpdate={setUpdate} drinks={drinks} setDrinks={setDrinks} />
      </Container>
    </>
  );


}


export default UserContainer;