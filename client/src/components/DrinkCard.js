import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useState } from 'react'

function DrinkCard({ deletedDrink, id, drinks, setDrinks, name, ingredients, instructions, img_url, custom }) {

    function handleDeleteDrink(event) {
        console.log(event)
        fetch(`/drinks/${event.target.name}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            }
        }).then((r) => {
            if (r.ok) {
                deletedDrink(id);
            }
        });
    }
    return (
        <Card>
            <Card.Content>
                <Image
                    size="massive"
                    floated="right"
                    src={img_url}
                    alt={name}
                />
                <Card.Header>{name}</Card.Header>
                <Card.Description><b>Ingredients:</b> {ingredients}</Card.Description>
                <Card.Description><b>Instructions:</b> {instructions}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Button circular icon='heart' />
                    0 likes
                </a>
                <a>
                    <Button onClick ={handleDeleteDrink} icon>
                        <Icon name='delete' />
                    </Button>
                </a>
                {{custom} ? <Icon name='glass martini' /> : null}
            </Card.Content>
        </Card>
    )

}

export default DrinkCard