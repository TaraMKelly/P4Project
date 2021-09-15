import { Container, Button, Grid } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { useState, useEffect } from 'react'


function UserCard() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('/users')
          .then(response => response.json())
          .then(data => console.log(data))
      }, [])


  return (
    <>
      <Container>
        <Card.Header>{"hello"}</Card.Header>
      </Container>
    </>
  );


}

export default UserCard;