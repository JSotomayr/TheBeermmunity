import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import SearchBar from "../component/searchBar.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (	
		<Fragment>	
				<div className="container_navbar_home">
					<Navbar/>
									
					<div className="container">
						{/* <div className="searchbar">
							<SearchBar />
						</div> */}
						<div className="container_btn">	
							<Link to="/login">
								<div className="btn mt-5">
									ACCEDER
								</div>
							</Link>								
							<Link to="/register">
								<div className="btn mt-5">
								REGISTRO
								</div>
							</Link>		
							<Link to={"/beer"}>
								<div className="btn mt-5">
									CERVEZAS
								</div>
							</Link>
						</div>
					</div>				
				</div>
		</Fragment>
	);
};