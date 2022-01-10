import React, {Fragment, useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Landing from "./landing";
import SearchBar from "../component/searchBar.jsx";


export const Home = () => {
  const { store, actions } = useContext(Context);


  return ( 

    <Fragment> 

      <div className="container_searchBar"> 
        <SearchBar /> 
      </div> 
    
      <Landing /> 

    </Fragment> 

  ); 

}; 
