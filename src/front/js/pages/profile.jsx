import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

import ProfileCard from "../component/profileCard.jsx";
import DefaultCard from "../component/defaultCard.jsx";
import "../../styles/profile.scss";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  const [myFavBeers, setMyFavBeers] = useState([]);
  const [myTastedBeers, setMyTastedBeers] = useState([]);
  const [profileCard, setProfileCard] = useState(null);
  const [myWishBeers, setMyWishBeers] = useState([]);

  let params = useParams();

  useEffect(async () => {
    await actions.getProfileInfo(localStorage.getItem("user"));
    await actions.getFavouriteBeer(localStorage.getItem("user"));
    await actions.getTastedBeer(localStorage.getItem("user"));
    await actions.getWishedBeer(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    if (Object.keys(store.profileInfo).length != 0) {
      setProfileCard(
        <ProfileCard key={store.profileInfo.id} element={store.profileInfo} />
      );
    }
  }, [store.profileInfo]);

  useEffect(() => {
    if (store.tastedBeer.length != 0) {
      setMyTastedBeers(
        store.tastedBeer.slice(0, 4).map((tasted, index) => {
          return (
            <>
              <DefaultCard key={tasted.id} element={tasted} />
            </>
          );
        })
      );
    }
    if (store.favouriteBeer.length != 0) {
      setMyFavBeers(
        store.favouriteBeer.slice(0, 4).map((fav, index) => {
          return (
            <>
              <DefaultCard key={fav.id} element={fav} />
            </>
          );
        })
      );
    }
    if (store.wishlist.length != 0) {
      setMyWishBeers(
        store.wishlist.slice(0, 4).map((wish, index) => {
          return (
            <>
              <DefaultCard key={wish.id} element={wish} />
            </>
          );
        })
      );
    }
  }, [store.tastedBeer, store.favouriteBeer, store.wishlist]);

  return (
    <Fragment>
      {profileCard}
      <div className="container__cerveteca">
        <Link to={"/cerveteca"}>
          <p className="subtitle">Cerveteca</p>
        </Link>
        <div className="display__cards">{myTastedBeers}</div>
      </div>
      <div className="container__fav">
        <Link to={"/profile/:id/favourite"}>
          <p className="subtitle">Favoritas</p>
        </Link>
        <div className="display__cards">{myFavBeers}</div>
      </div>
      <div className="container__wish">
        <Link to={"/wishlist"}>
          <p className="subtitle">Pendientes</p>
        </Link>
        <div className="display__cards">{myWishBeers}</div>
      </div>
    </Fragment>
  );
};
