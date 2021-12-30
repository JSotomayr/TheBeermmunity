import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import Rating from "@mui/material/Rating";
import "../../styles/cardDetails.scss";

const CardDetails = (props) => {
  const [value, setValue] = useState(3);

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
                  value={value}
                  max={5}
                  icon={beerRate}
                  emptyIcon={beerEmptyRate}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
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
