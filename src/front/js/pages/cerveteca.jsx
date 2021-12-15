import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";
import GenericButton from "../component/genericButton.jsx"

const Cerveteca = () => {
	const { store, actions } = useContext(Context);
	const [triedList, setTriedList] = useState([]);

	useEffect(() => {
		if (store.favourite.length != 0) {
			setTriedList(
				store.tastedBeer.map((wish, index) => {
					return (
						<div classname="container_detail" key={index.toString()} >
							<DefaultCard 
								element={wish} 
							/>
							<GenericButton
									add={actions.addTastedBeer(store.beersDetail)} 
									name={"Mi Cerveteca"}
							/>
						</div>
					)
				})
			);
		}
	}, [store.tastedBeer]);

	return (
		<div>
			<span className="title">Cerveteca</span>
			{triedList}
		</div>
	);
};

export default Cerveteca;
