import { Link } from 'react-router-dom';

function NewDrinkButton() {
    return (
      <Link to="/drinks/new">
        Add New Drink
      </Link>
    );
  }

  export default NewDrinkButton