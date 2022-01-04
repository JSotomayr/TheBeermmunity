
import React from "react";
import { Context } from "../store/appContext";
import "../../styles/searchBar.scss"

export const SearchBar = () =>{
    const [name, setName] = useState(null)
    const seachIcon = <i className="fas fa-search"></i>
    return(
        <div className="searchBar__Box">
            <input type="text" placeholder="What are you looking for?" className="seachBar__input" onChange = {(e) => {setName(e.target)}}/>
            <div className="searchBar-container__button">
                <button as="input" type="submit" value="" className="seachBar__button">{seachIcon}</button>
                actions.searcBeer(name)
            </div>
            
        </div>
    )
}