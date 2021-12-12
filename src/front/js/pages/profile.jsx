import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";


const Profile = () => {
    const { store, actions } = useContext(Context);

    const [myFavBeers, setMyFavBeers] = useState([]);
    const [myTastedBeers, setMyTastedBeers] = useState([]);
    const [myWishBeers, setMyWishBeers] = useState([]);

    useEffect(() => {
        if (store.tastedBeers.length != 0) {
			setMyTastedBeers(
				store.tastedBeers.map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />;
				})
			);
		}
    }, [store.tastedBeers]);

    useEffect(() => {
        if (store.favourite.length != 0) {
			setMyFavBeers(
				store.favourite.map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />;
				})
			);
		}
    }, [store.favourite]);

    useEffect(() => {
        if (store.wishlist.length != 0) {
			setMyWishBeers(
				store.wishlist.map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />;
				})
			);
		}
    }, [store.wishlist]);

    return(
        <Fragment>
            <div> {/*Tarjeta con los datos del usuario fetch y .map */}
                <img src=""/>
                <h2>Name Lastname</h2>
                <h3>Username</h3>
                <span>City, Country</span>
            </div>
            <div>
                Description
            </div>
            <Link to={"/customer/:id/cerveteca"}>
                <span className="subtitle">Cerveteca</span>            
            </Link>
            <div>{myTastedBeers}</div>
            <Link to={"/customer/:id/favourites"}>
                <span className="subtitle"><Favoritas></Favoritas></span>            
            </Link>
            <div>{myFavBeers}</div>
            <Link to={"/customer/:id/wishlist"}>
                <span className="subtitle">Por probar</span>            
            </Link>
            <div>{myWishBeers}</div>
        </Fragment>
    )
}

export default Profile