import UserCard from './UserCard';
import { Container, Button, Grid } from 'semantic-ui-react'


function UserContainer({liked, setLiked, setGetDrinkId, setUpdate, drinks, setDrinks}) {


  return (
    <>
      <Container>
        <UserCard liked = {liked} setLiked = {setLiked} setGetDrinkId = {setGetDrinkId} setUpdate = {setUpdate} drinks = {drinks} setDrinks = {setDrinks}/>
      </Container>
    </>
  );


}

export default UserContainer;