import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";

const Wishlist = () => {
	const { store, actions } = useContext(Context);
	const [toTryList, setToTryList] = useState([]);

	useEffect(() => {
		if (store.wishlist.length != 0) {
			setToTryList(
				store.wishlist.map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />;
				})
			);
		}
	}, [store.wishlist]);

	return <div>ESTO ES UNA MIERDA{toTryList}</div>;
};

export default Wishlist;
