import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<div>
				<Link to={"/beer"}>
					<h1>ENSEÑAME LA BIRRA</h1>
				</Link>
				<Link to={"/formBusiness"}>
					<h1>Formulario Business</h1>
				</Link>
			</div>
{/* 
			<Dropdown>
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
			</Dropdown> */}
		<div className="text-center">
			<Navbar/>
			<div className="btn mt-5">
				<Link to="/login">
					LOGIN
				</Link>	
			</div>
			<div className="btn mt-5">
				<Link to="/register">
					REGISTER
				</Link>	
			</div>
			<div>
				<Link to={"/beer"}>
					<h1>CERVEZAS</h1>
				</Link>
			</div>
		</div>
	</Fragment>
	);
};