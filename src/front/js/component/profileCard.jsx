import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import "../../styles/profile.scss";

const ProfileCard = (props) => {
  const { actions, store } = useContext(Context);
  const [generateProfile, setGenerateProfile] = useState();

  const beerRate = (
    <img
      className="full_beer"
      src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1640793667/full.beer_wotybg.png"
      alt="full_beer"
    />
  );
  const beerEmptyRate = (
    <img
      className="empty_beer"
      src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1640793667/empty.beer_iuwdku.png"
      alt="empty_beer"
    />
  );
  const averageValue = () => {
    let rate = 0;
    for (let i = 0; i < store.storedBrewerieReviews.length; i++) {
      rate += store.storedBrewerieReviews[i].rating;
    }
    return rate / store.storedBrewerieReviews.length;
  };

  return (
    <>
      {store.profileInfo.user_type == true ? (
        <>
          <div className="profileContainer">
            <img className="profileContainer__img" src={props.element.image} />
            <div className="profileContainer__top">
              <div className="profileContainer__details">
                <h2 className="profileContainer__title">
                  {props.element.username}
                </h2>
                <h3 className="profileContainer__subtitle">
                  {props.element.user_detail[0].company_name}
                </h3>
                <span className="profileContainer__text">
                  {props.element.city}, {props.element.country}
                </span>
                <span className="profileContainer__text">
                  {props.element.user_detail[0].address}
                </span>
              </div>
              <div className="profileContainer__description">
                {props.element.description}
              </div>
              <div className="rating__box">
                <Rating
                  name="rating"
                  value={averageValue()}
                  readOnly
                  icon={beerRate}
                  emptyIcon={beerEmptyRate}
                />
                <Box sx={{ ml: 2 }}>{averageValue().toFixed()}</Box>
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </>
      ) : store.profileInfo.user_type == false ? (
        <>
          <div className="profileContainer">
            <img className="profileContainer__img" src={props.element.image} />
            <div className="profileContainer__top">
              <div className="profileContainer__details">
                <h2 className="profileContainer__title">
                  {props.element.username}
                </h2>
                <h3 className="profileContainer__subtitle">
                  {props.element.user_detail[0].name}{" "}
                  {props.element.user_detail[0].lastname}
                </h3>
                <span className="profileContainer__text">
                  {props.element.city}, {props.element.country}
                </span>
              </div>
              <div className="profileContainer__description">
                {props.element.description}
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </>
      ) : null}
    </>
  );
};

ProfileCard.propTypes = {
  element: PropTypes.object,
};

export default ProfileCard;
