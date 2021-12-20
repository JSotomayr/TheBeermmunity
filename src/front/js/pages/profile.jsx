import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import ProfileCard from "../component/profileCard.jsx";

export const Profile = () => {
    const { store, actions } = useContext(Context);


    // const [myFavBeers, setMyFavBeers] = useState([]);
    const [myTastedBeers, setMyTastedBeers] = useState([]);
    // const [myWishBeers, setMyWishBeers] = useState([]);

	let params = useParams();

    useEffect(() => {
        if (store.tastedBeer.length != 0) {
			setMyTastedBeers(
				store.tastedBeers.slice(0, 4).map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />;
				})
			);
		}
    }, [store.tastedBeers]);

    // useEffect(() => {
    //     if (store.favourite.length != 0) {
	// 		setMyFavBeers(
	// 			store.favourite.slice(0, 4).map((wish, index) => {
	// 				return <DefaultCard key={index.toString()} element={wish} />;
	// 			})
	// 		);
	// 	}
    // }, [store.favourite]);

    // useEffect(() => {
    //     if (store.wishlist.length != 0) {
	// 		setMyWishBeers(
	// 			store.wishlist.slice(0, 4).map((wish, index) => {
	// 				return <DefaultCard key={index.toString()} element={wish} />;
	// 			})
	// 		);
	// 	}
    // }, [store.wishlist]);

    return(
        <Fragment>
            {store.currentUser != null ? 
                (<ProfileCard
                    element={store.currentUser.sub}
                /> ): 
                ("")}
            <Link to={"/profile/:id/cerveteca"}>
                <span className="subtitle">Cerveteca</span>            
            </Link>
            <div>{myTastedBeers}</div>
        </Fragment>
    )
}
