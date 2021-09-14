import { Card, Icon, Image } from 'semantic-ui-react'

function DrinkCard({ name, ingredients, img_url, custom }) {

    return (
        <Card>
            <Card.Content>
            <div>
                <img height={200} src={img_url} alt={name} />
                <Card.Header>{name}</Card.Header>
                <Card.Description>Ingredients: {ingredients}</Card.Description>
                Custom Drink {custom} <Icon name = 'glass martini'/>
                {/* if custom, display 'glass martini' icon */}
            </div>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name = 'heart'/>
                    0 likes
                </a>
                <a>
                    <Icon name = 'delete'/>
                    Remove from favorites
                </a>
            </Card.Content>
        </Card>
    )

}

export default DrinkCard