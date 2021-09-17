import { useState, useEffect } from 'react'
import UserCard from './UserCard';
import { Container } from 'semantic-ui-react'
// import styled from "styled-components";


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
        {/* <ContentBox> */}
          <UserCard user={user} liked={liked} setLiked={setLiked} setGetDrinkId={setGetDrinkId} setUpdate={setUpdate} drinks={drinks} setDrinks={setDrinks} />
        {/* </ContentBox> */}
      </Container>
    </>
  );


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

export default UserContainer;