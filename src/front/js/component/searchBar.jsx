
import React, {useContext, useState }from "react";
import { Context } from "../store/appContext";
import "../../styles/searchBar.scss"
import { Link } from "react-router-dom";

const SearchBar = () =>{
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(null)
    const searchIcon = <i className="fas fa-search"></i>


    return(

            <div className="searchBar__Box">
            <input 
                    type="text" 
                    placeholder="Buscar marcas cervezas" 
                    className="searchBar__input" 
                    onChange = {(e) => {setName(e.target.value)}}

                />
                    <div className="searchBar-container__button">
                    <Link to={"/searchBeers"}>

                        <button 
                            as="input" 
                            type="submit" 
                            value="" 
                            className="searchBar__button" 
                            onClick = {() => {actions.searchBeer(name)}}>
                            {searchIcon}
                        </button>  
                        </Link> 
                    </div> 
            </div>

    );
}


export default SearchBar;