import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import FavouriteButton from "../component/favouriteButton.jsx";
import { Link } from "react-router-dom";


import CardDetails from "../component/cardDetails.jsx";
import WishButton from "../component/wishButton.jsx"


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
						<WishButton element={detail}/>
					</div>	
					);
				})
			);
		}, [store.beersDetail]
	);

    return (
		<div>
			{detailBeer}
		</div>
	)
}

export default BeerDetail;