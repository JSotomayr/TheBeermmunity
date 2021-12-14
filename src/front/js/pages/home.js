import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Fragment } from "react";
import PrimarySearchAppBar from "../component/primarySearchAppBar.jsx"
import ControllableStates from "../component/ControllableStates.jsx";
import SearchBar from "../component/search.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (	
		<Fragment>	
			
				<div className="text-center">
					<Navbar/>
				<div className="container">
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
					<div className="mt-5">
						<i className="fas fa-search"></i>
					</div>
					<PrimarySearchAppBar />
					<ControllableStates />
					<SearchBar />
				</div>
			</div>
		</Fragment>
	);
};
