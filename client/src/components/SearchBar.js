import { useState } from "react";
import RenderSearchResults from "./RenderSearchResults";
import { Button, Input } from "semantic-ui-react";

function SearchBar({ searchValue, setSearchValue }) {
    const [newSearchValue, setNewSearchValue] = useState("")
    const [searchObject, setSearchObject] = useState("")

    function handleSearch(event) {
        setSearchValue(event.target.value)
        setNewSearchValue(event.target.value)
    }



    const handleButtonSearch = (e) => {
        e.preventDefault()
        setSearchObject(newSearchValue)
    }

    return (
        <div>
            <form className='searchForm'>
                <Input placeholder='Search for a cocktail' size="large" onChange={handleSearch} />
                <Button type='submit' onClick={handleButtonSearch}>Search</Button>
            </form>
            <RenderSearchResults searchObject={searchObject} />
        </div>
    )
}
export default SearchBar