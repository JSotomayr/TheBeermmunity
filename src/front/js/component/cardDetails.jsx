import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/cardDetails.scss";

const CardDetails = (props) => {
  return (
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
            <p>{props.element.description}</p>
            <span className="detail__date">
              {props.element.publishment_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  element: PropTypes.object,
};

export default CardDetails;
