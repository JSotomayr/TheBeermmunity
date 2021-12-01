import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";

const AllBeers = () => {
	const { store, actions } = useContext(Context);
	const [beerList, setBeerList] = useState([]);

	useEffect(() => {
		if (store.beers.length != 0) {
			setBeerList(
				store.beers.map((beer, index) => {
					return <DefaultCard key={index.toString()} element={beer} />;
				})
			);
		}
	}, [store.beers]);

	return <div>ESTO ES UNA MIERDA{beerList}</div>;
};

export default AllBeers;
