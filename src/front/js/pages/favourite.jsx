import React, { useContext, useState, useEffect } from "react"
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";
import { useParams } from "react-router";
import { Navbar } from "react-bootstrap";

export const Favourite = () => {
    const {store, actions} = useContext(Context);
    const [favourite, setFavourite] = useState([]);

    let params = useParams();

	useEffect(() => {
		actions.addFavourite(params.id);
	}, []);


    useEffect(() => {
        if (store.favouriteBeer.length != 0) {
            setFavourite(
                store.favouriteBeer.map((fav, index) => {
                    return <DefaultCard key={index.toString()} element={fav} />;
                })
            );
            console.log("FAVORITOS", store.favouriteBeer)
        }
    }, [store.favouriteBeer]);

return (
    <div>
        <Navbar />
        <span className="title">Favoritos</span>
        {favourite}
    </div>
);
};

export default Favourite;




