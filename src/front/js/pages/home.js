import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import SearchBar from "../component/searchBar.jsx";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (	
		<Fragment>	
				<div className="container_navbar_home">
					<Navbar/>
									
					<div className="container">
						{/* <Row className="container_home_searchbar">
							<Col>
								<SearchBar />
							</Col>
						</Row> */}
						<div className="container_btn mt-5">	
							<Link to="/login">
								<div className="btn container_btn_access m-2">
									ACCEDER
								</div>
							</Link>								
							<Link to="/register">
								<div className="btn container_btn_register m-2">
									REGISTRO
								</div>
							</Link>		
						</div>
					</div>				
				</div>
		</Fragment>
	);
};