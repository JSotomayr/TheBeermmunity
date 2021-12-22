import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import SearchBar from "../component/searchBar.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

	return (	
		<div className="container_searchBar">						
			<SearchBar />						
		</div>				
	);
};
