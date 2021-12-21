import React, { useContext, useState, useEffect } from "react"
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Favourite = () => {
    const {store, actions} = useContext(Context);
    const [favourite, setFavourite] = useState([]);

    useEffect(() => {
        if (store.favouriteBeer.length != 0) {
            setFavourite(
                store.favouriteBeer.map((fav, index) => {
                    return <DefaultCard key={index.toString()} element={fav} />;
                })
            );
            console.log("FAVORITOS", store.favouriteBeer)
        }
    }, []);

return (
    <div>
        <div className="btn">
			<Link to="/">
				volver
			</Link>
		</div>
        <Navbar />
        <span className="title">Favoritos</span>
        {favourite}
    </div>
);
};

export default Favourite;




