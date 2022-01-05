
import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button'
import "../../styles/searchBar.scss"

const SearchBar = () =>{
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(null)
    const searchIcon = <i className="fas fa-search"></i>

    return(
        // <Fragment>                
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
                            onClick = {() => {actions.searchBeer(brand)}}>
                            {searchIcon}
                        </button>   
                    </div> 
            </div>
        // </Fragment>
    )
}


export default SearchBar;