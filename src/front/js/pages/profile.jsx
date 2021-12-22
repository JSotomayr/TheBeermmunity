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
  const [profileCard, setProfileCard] = useState();
  // const [myWishBeers, setMyWishBeers] = useState([]);

  let params = useParams();

  useEffect(() => {
    actions.getProfileInfo(params.id);
  }, []);

  useEffect(() => {
    if (Object.keys(store.profileInfo).length) {
      setProfileCard(<ProfileCard element={store.currentUser.sub} />);
    }
  }, [store.profileInfo]);

  useEffect(() => {
    if (store.tastedBeer.length != 0) {
      setMyTastedBeers(
        store.tastedBeer.map((wish, index) => {
          return <DefaultCard key={index.toString()} element={wish} />;
        })
      );
    }
  }, []);

  useEffect(() => {
    if (store.favouriteBeer.length != 0) {
      console.log("esta es la lista de fav", store.favouriteBeer);
      setMyFavBeers(
        store.favouriteBeer.map((wish, index) => {
          return (
            <>
              <DefaultCard key={index.toString()} element={wish} />
            </>
          );
        })
      );
    }
  }, []);

  // useEffect(() => {
  //     if (store.wishlist.length != 0) {
  // 		setMyWishBeers(
  // 			store.wishlist.slice(0, 4).map((wish, index) => {
  // 				return <DefaultCard key={index.toString()} element={wish} />;
  // 			})
  // 		);
  // 	}
  // }, [store.wishlist]);

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
      {/* <div className="container__wish">
                <Link to={"/wishlist"}>
                    <p className="subtitle">Pendientes</p>            
                </Link>
                <div className="display__cards">{myWishBeers}</div>
            </div> */}
    </Fragment>
  );
};
