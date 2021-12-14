import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import ProfileCard from "../component/profileCard.jsx";



const Profile = () => {
    const { store, actions } = useContext(Context);

    const [myProfile, setMyProfile] = useState([])

    // const [myFavBeers, setMyFavBeers] = useState([]);
    const [myTastedBeers, setMyTastedBeers] = useState([]);
    // const [myWishBeers, setMyWishBeers] = useState([]);

	let params = useParams();
	
	useEffect(() => {
		actions.getProfileInfo(params.id);
	}, []);

    useEffect(() => {
        setMyProfile(
            store.profileInfo.map((info, index) => {
                return (
                    <ProfileCard
                        key={index.toString()}
                        element={info}
                    />
                );
            })
        )
    }, [store.profileInfo])

    useEffect(() => {
        if (store.tastedBeers.length != 0) {
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
            {myProfile}
            <Link to={"/profile/:id/cerveteca"}>
                <span className="subtitle">Cerveteca</span>            
            </Link>
            <div>{myTastedBeers}</div>
            {/* <Link to={"/profile/:id/favourites"}>
                <span className="subtitle">Favoritas</span>            
            </Link>
            <div>{myFavBeers}</div> */}
            {/* <Link to={"/profile/:id/wishlist"}>
                <span className="subtitle">Por probar</span>            
            </Link>
            <div>{myWishBeers}</div> */}
        </Fragment>
    )
}

export default Profile