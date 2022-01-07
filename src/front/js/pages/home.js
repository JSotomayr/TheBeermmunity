import React, {useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import Landing from "./landing";
import SearchBar from "../component/searchBar.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (

        <div>
          <div className = "searchbar_container">
              <SearchBar />
          </div>
          {store.searchBeers.map((beer, i) => {return <p>{beer.brand}</p>}) }
          <Landing />
        </div>
    
  );
};
