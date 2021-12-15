import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Fragment } from "react";
import SearchBar from "../component/searchBar.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (	
		<Fragment>	
			
				<div className="container_navbar_home">
					<Navbar/>
									
					<div className="container">
						<div className="searchbar">
							<SearchBar />
						</div>
						<div className="container_btn">
							<div className="btn mt-5">
								<Link to="/login">
									ACCEDER
								</Link>	
							</div>
							<div className="btn mt-5">
								<Link to="/register">
									REGISTRO
								</Link>	
							</div>
							<div className="btn mt-5">
								<Link to={"/beer"}>
									CERVEZAS
								</Link>
							</div>
						</div>
					</div>				
				</div>
		</Fragment>
	);
};
