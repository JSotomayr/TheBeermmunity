import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import DefaultCard from "./defaultCard.jsx";

const WishlistProfile = () => {
	const { store, actions } = useContext(Context);
	const [profileWish, setProfileWish] = useState([]);

	useEffect(() => {
		if (store.wishlist.length != 0) {
			setProfileWish(
				store.wishlist.map((wish, index) => {
					return <DefaultCard key={index.toString()} element={wish} />;
				})
			);
		}
	}, [store.wishlist]);

	return <div>
                <span className="title">My wishlist</span>
                {profileWish}
            </div>;
};

export default WishlistProfile;
