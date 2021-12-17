import React, { Fragment, useContext, useEffect, useState } from "react";
import CardDetails from "../component/cardDetails.jsx";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import FavouriteButton from "../component/favouriteButton.jsx";



const BeerDetail = () => {
    const { store, actions } = useContext(Context);
    const [detailBeer, setDetailBeer] = useState([]);

	let params = useParams();
	
	useEffect(() => {
		actions.getBeerDetail(params.id);
	}, []);

    useEffect(
		() => {
			setDetailBeer(
				store.beersDetail.map((detail, index) => {
					return (
						<CardDetails
							key={index.toString()}
							element={detail}
						/>
					);
				})
			);
		},
		[store.beersDetail]
	);

    return <>
		<FavouriteButton />
		{detailBeer}
	</>
}

export default BeerDetail;