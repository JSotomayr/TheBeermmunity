import React, { Fragment, useContext, useEffect, useState } from "react";
import CardDetails from "../component/cardDetails.jsx";
import { Context } from "../store/appContext";


export const BeerDetail = () => {
    const { store, actions } = useContext(Context);
    const [detailBeer, setDetailBeer] = useState([]);

	let params = useParams();
	// const URL = store.urlCharacters;

	useEffect(() => {
		actions.getBeersDetail(params.uid);
	}, []);

    useEffect(
		() => {
			setDetailBeer(
				store.beersDetail.map((beer, index) => {
					return (
						<CardDetails
							key={index.toString()}
							element={beer}
						/>
					);
				})
			);
		},
		[store.beersDetail]
	);

    return <div>{detailBeer}</div>
}