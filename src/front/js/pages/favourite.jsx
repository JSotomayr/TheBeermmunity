import React, { useContext, useState, useEffect, Fragment } from "react"
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";

import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import "../../styles/favourite.scss"


export const Favourite = () => {
    const {store, actions} = useContext(Context);
    const [favourite, setFavourite] = useState([]);
    
    const [message, setMessage] = useState("");
    useEffect(() => {
        actions.getFavouriteBeer();
    },[])

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
    <Fragment>
        <Navbar />
        <div className="btn">
            <Link to="/">
                volver
            </Link>
        </div>
        <div className ="MessageLog">
            {message}
        </div>

        <div className="btn mt-5">
            <Link to="/login">
                ACCEDER
            </Link>	
        </div>
        <div className="btn mt-5">
            <Link to="/register">
                REGISTRO
            </Link>	
        </div>
        
        {favourite}
            
    </Fragment>
);
};

export default Favourite;




