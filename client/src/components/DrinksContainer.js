import DrinksList from './DrinksList'
import DrinkForm from './DrinkForm'
import styled from "styled-components";
import { Container } from 'semantic-ui-react'


function DrinksContainer({ liked, setLiked, getDrinkId, setGetDrinkId, getId, setGetId, setUpdate, update, deletedDrink, updatedDrink, drinks, setDrinks }) {


  return (

    <Container>
      {update ? <DrinkForm getDrinkId={getDrinkId} setGetDrinkId={setGetDrinkId} getId={getId} setUpdate={setUpdate} update={update} drinks={drinks} setDrinks={setDrinks} /> : ""}
      <ContentBox>
        <DrinksList liked = {liked} setLiked = {setLiked}  drinks = {drinks} setDrinks = {setDrinks} getDrinkId={getDrinkId} setGetDrinkId={setGetDrinkId} getId={getId} setGetId={setGetId} setUpdate={setUpdate} update={update} deletedDrink={deletedDrink} updatedDrink={updatedDrink} drinks={drinks} setDrinks={setDrinks} />
      </ContentBox>
    </Container>
  );
}
// const Grid = styled.div`
//   display: grid
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: 50px 50px
//   grid-gap: 5px
// `;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  flex-wrap: wrap;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export default DrinksContainer;