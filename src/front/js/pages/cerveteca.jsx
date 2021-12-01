import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";

const Cerveteca = () => {
	const { store, actions } = useContext(Context);
	const [triedList, setTriedList] = useState([]);

	useEffect(() => {
		if (store.favourite.length != 0) {
			setTriedList(
				store.favourite.map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />;
				})
			);
		}
	}, [store.favourite]);

	return (
        <div>
            <span className="title">Cerveteca</span>
            {triedList}
        </div>
    );
};

export default Cerveteca;
