import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

import "../../styles/cardDetails.scss";

const CardDetails = (props) => {
  const { store, actions } = useContext(Context);

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
    for (let i = 0; i < store.storedBeerReviews.length; i++) {
      rate += store.storedBeerReviews[i].rating;
      console.log("A saber la suma", rate);
    }
    return rate / store.storedBeerReviews.length;
  };

  return (
    <>
      <div className="detail">
        <div className="detail__top">
          <div className="detail__image">
            <img className="bottle" src={props.element.image} alt="top" />
          </div>
          <div className="detail__right">
            <h2 className="detail__title">
              {props.element.brand} {props.element.variety}
            </h2>
            <h3 className="detail__subtitle">{props.element.origin}</h3>
            <div className="detail__body">
              <ul className="detail__properties">
                <li>Estilo: {props.element.style}</li>
                <li>Graduación: {props.element.obv}</li>
                <li>
                  Temperatura de servido: {props.element.drinking_temperature}
                </li>
              </ul>
              <p className="description">{props.element.description}</p>
            </div>
            <div className="detail__bottom">
              <span className="detail__date">
                {props.element.publishment_date}
              </span>
              <div className="detail__rate">
                <Rating
                  name="rating"
                  value={averageValue() || 0}
                  readOnly
                  icon={beerRate}
                  emptyIcon={beerEmptyRate}
                />
                <Box className="rating__num" sx={{ ml: 2 }}>
                  {averageValue().toFixed() || 0}
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

CardDetails.propTypes = {
  element: PropTypes.object,
};

export default CardDetails;
