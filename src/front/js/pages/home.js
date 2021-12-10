import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Link to={"/all_beers"}>
				<h1>ENSEÑAME LA BIRRA</h1>
			</Link>
		</div>
	);
};
