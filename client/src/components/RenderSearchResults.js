import { useEffect, useState } from "react";
import SearchedDrinksList from "./SearchedDrinksList";

export default function RenderSearchResults({searchObject}){
    const [drinks, setDrinks] = useState([]);

    useEffect(()=>{
        if(searchObject != undefined){
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchObject}`)
            .then(res => res.json())
            .then((drinksArray) => {
                setDrinks(drinksArray.drinks)
            })
        }
        console.log(drinks)
    }, [searchObject]);

    if(searchObject.length > 0){
    return(
        <div className='cardGroupSearch'>
            <SearchedDrinksList drinks={drinks}/>
        </div>
    )
    } else return (<div>Search for Drinks!</div>)
}