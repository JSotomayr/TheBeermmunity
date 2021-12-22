import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import DefaultCard from "../component/defaultCard.jsx";
import { Navbar } from "../component/navbar"

const Cerveteca = () => {
	const { store, actions } = useContext(Context);
	const [triedList, setTriedList] = useState([]);

	useEffect(() => {
		actions.getTastedBeer();
	},[])
	
	useEffect(() => {
		if (store.tastedBeer.length != 0) {
			setTriedList(
				store.tastedBeer.map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />
				})
			);
		}
	}, [store.tastedBeer]);

	return (
		<div>
			<div className="btn">
				<Link to="/">
					volver
				</Link>
			</div>
			<span className="title">Cerveteca</span>
			{triedList}
    	</div>
	);
};

export default Cerveteca;
