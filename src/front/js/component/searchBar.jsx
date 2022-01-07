
import React, {useContext, useState }from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button'
import "../../styles/searchBar.scss"

const SearchBar = () =>{
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(null)
    const searchIcon = <i className="fas fa-search"></i>

    return(
            
            <div className="searchBar__Box">
                <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="searchBar__input" 
                    onChange = {(e) => {setName(e.target.value)}}
                />
                    <div className="searchBar-container__button">
                        <button 
                            as="input" 
                            type="submit" 
                            value="" 
                            className="searchBar__button" 
                            onClick = {() => {actions.searchBeer(name)}}>
                            {searchIcon}
                        </button>   
                    </div> 
            </div>

    )
}


export default SearchBar;