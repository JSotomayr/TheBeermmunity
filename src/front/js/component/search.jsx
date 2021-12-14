import React from "react";


const SearchBar = () => (
    <form>
        <label htmlFor="search"></label>
        <input
            type="text"
            id="search"
            placeholder="Favoritos..."
            name="search" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;

