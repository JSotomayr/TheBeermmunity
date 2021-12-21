import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import CardDetails from "../component/cardDetails.jsx";
import FavouriteButton from "../component/favouriteButton.jsx";
import ButtonCerveteca from "../component/buttonCerveteca.jsx"

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
					<div key = {detail.id}>
						<div className="btn">
							<Link to="/">
								volver
							</Link>
						</div>
							<CardDetails
								key={index.toString()}
								element={detail}	
						/>
						<FavouriteButton element = {detail}/>
						<ButtonCerveteca element={detail} />
					</div>	
					);
				})
			);
		},
		[store.beersDetail]
	);

    return <>
		{detailBeer}
	</>
}

export default BeerDetail;