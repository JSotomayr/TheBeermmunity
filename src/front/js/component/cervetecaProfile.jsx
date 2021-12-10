import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";

const CervetecaProfile = () => {
	const { store, actions } = useContext(Context);
	const [profileTried, setProfileTried] = useState([]);

	useEffect(() => {
		if (store.tastedBeer.length != 0) {
			setProfileTried(
				store.tastedBeer.map((tasted, index) => {
					return <DefaultCard key={index.toString()} element={tasted} />;
				})
			);
		}
	}, [store.tastedBeer]);

	return (
        <div>
            <span className="title">Mi Cerveteca</span>
            {profileTried}
        </div>
    );
};

export default CervetecaProfile;