import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

import CardDetails from "../component/cardDetails.jsx";
import GenericButton from "../component/genericButton.jsx"


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
						<div classname="detail_container" key={index.toString()}>
							<CardDetails
								
								element={detail}
							/>
							<GenericButton
								
								add={actions.addWishlist(store.beersDetail)} 
								name={"Quiero probarla"}
							/>
						</div>
					);
				})
			);
		},
		[store.beersDetail]
	);

    return (
		<div>
			{detailBeer}
		</div>
	)
}

export default BeerDetail;