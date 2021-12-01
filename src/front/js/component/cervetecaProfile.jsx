import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";

const CervetecaProfile = () => {
	const { store, actions } = useContext(Context);
	const [profileTried, setProfileTried] = useState([]);

	useEffect(() => {
		if (store.favourite.length != 0) {
			setProfileTried(
				store.favourite.map((fav, index) => {
					return <DefaultCard key={index.toString()} element={fav} />;
				})
			);
		}
	}, [store.favourite]);

	return (
        <div>
            <span className="title">Mi Cerveteca</span>
            {profileTried}
        </div>
    );
};

export default CervetecaProfile;