import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Dropdown from "react-bootstrap/Dropdown";

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
			<div>
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
			</Dropdown>
		</div>
	</Fragment>
	);
};
