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
			{/* <Dropdown>
				<Dropdown.Toggle className="dropdown" variant="danger" id="dropdown-basic">
					<i className="fab fa-jedi-order" />
					FAVORITOS
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favourites.map((favourites, index) => (
						<Dropdown.Item key={index.toString()} href="#/action-1">
							{favourites.name}
						</Dropdown.Item>
					))}
				</Dropdown.Menu> 
			</Dropdown> 		 */}
				<div className="container_navbar_home">
					<Navbar/>
									
					<div className="container">
						{/* <div className="searchbar">
							<SearchBar />
						</div> */}
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