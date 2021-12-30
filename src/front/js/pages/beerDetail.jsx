import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import CardDetails from "../component/cardDetails.jsx";
import FavouriteButton from "../component/favouriteButton.jsx";
import WishButton from "../component/wishButton.jsx";
import ButtonCerveteca from "../component/buttonCerveteca.jsx";
import Comment from "../component/comment.jsx";
import { CommentForm } from "../component/commentForm.jsx";
import "../../styles/beerDetail.scss";

const BeerDetail = () => {
  const { store, actions } = useContext(Context);
  const [detailBeer, setDetailBeer] = useState([]);
  const [reviews, setReviews] = useState([]);

  let params = useParams();

  useEffect(async () => {
    await actions.getBeerDetail(params.id);
    await actions.getProfileInfo(localStorage.getItem("user"));
    await actions.getBeerReviews(params.id);
    console.log(store.storedReviews);
  }, []);

  useEffect(() => {
    if (store.profileInfo.user_type || !localStorage.getItem("logged")) {
      setDetailBeer(
        store.beersDetail.map((detail, index) => {
          return (
            <div className="detail__container" key={detail.id}>
              <div className="btn">
                <Link to="/beer">volver</Link>
              </div>
              <CardDetails key={index.toString()} element={detail} />
            </div>
          );
        })
      );
    } else {
      setDetailBeer(
        store.beersDetail.map((detail, index) => {
          return (
            <div className="detail__container" key={detail.id}>
              <div className="btn">
                <Link to="/beer">volver</Link>
              </div>
              <CardDetails key={index.toString()} element={detail} />
              <div className="button__container">
                <FavouriteButton element={detail} />
                <WishButton element={detail} />
                <ButtonCerveteca element={detail} />
              </div>
            </div>
          );
        })
      );
    }
  }, [store.beersDetail]);

  useEffect(async () => {
    if (store.storedReviews.length != 0) {
      setReviews(
        store.storedReviews.map((review, index) => {
          console.log(review);
          return <Comment key={index.toString()} element={review} />;
        })
      );
    }
  }, [store.storedReviews]);

  return (
    <>
      <div>{detailBeer}</div>
      <div className="commentContainer">{reviews} </div>
      <div className="commentForm">
        <h3 className="comment_subtitle">Tu review</h3>
        {localStorage.getItem("logged") ? <CommentForm /> : <></>}
      </div>
    </>
  );
};

export default BeerDetail;
