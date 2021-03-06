import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import DefaultCard from "../component/defaultCard.jsx";
import { Link } from "react-router-dom";
import "../../styles/favourite.scss";

export const Favourite = () => {
  const { store, actions } = useContext(Context);
  const [favourite, setFavourite] = useState([]);

  const [message, setMessage] = useState("");

  useEffect(() => {
    actions.getFavouriteBeer(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    if (store.favouriteBeer.length != 0) {
      setFavourite(
        store.favouriteBeer.map((fav, index) => {
          return <DefaultCard key={index.toString()} element={fav} />;
        })
      );
      console.log("FAVORITOS", store.favouriteBeer);
    }
  }, [store.favouriteBeer]);

  return (
    <div>
      <h1 className="title">Todas tus favoritas</h1>
      <div className="favourites">{favourite}</div>
    </div>
  );
};

export default Favourite;
