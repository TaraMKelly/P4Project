

function SearchBar({searchValue, setSearchValue}){

    function handleSearch(event){
        setSearchValue(event.target.value)
    }
    
    return(
        <form>
            <input type= "text" name = "searchBar" value = {searchValue} placeholder = "Search..." onChange={handleSearch}></input>
        </form>
    )
}
export default SearchBar