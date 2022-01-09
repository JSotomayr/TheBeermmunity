import React, {Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import SearchBar from "../component/searchBar.jsx";
import DefaultCard from "../component/defaultCard.jsx";
import "../../styles/searchBeers.scss"


export const SearchBeers = () => {
  const { store, actions } = useContext(Context);



  return ( 

    <Fragment> 

        <div className="container_searchBar"> 
            <SearchBar /> 
        </div> 
        <div className ="container_searchBeers">
            {store.searchBeers.map((beer, index) => {return <DefaultCard key={index.toString()} element={beer} />;}) }
        </div>

    </Fragment> 

  ); 

}; 





