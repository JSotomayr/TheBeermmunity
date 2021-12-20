import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import { Navbar } from "react-bootstrap";
import DefaultCard from "../component/defaultCard.jsx";

const Wishlist = () => {
	const { store, actions } = useContext(Context);
	const [toTaste, setToTaste] = useState([]);

	useEffect(() => {
		if (store.wishlist.length != 0) {
			setToTaste(
				store.wishlist.map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />;
				})
			);
		}
	}, [store.tastedBeer]);

	return (
		<div>
			<Link to="/">
				volver
			</Link>
			<span className="title">Cervezas que quiero probar</span>
			{toTaste}
		</div>
	);
};

export default Wishlist;