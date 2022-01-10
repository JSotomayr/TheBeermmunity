import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/defaultCard.scss";

const DefaultCard = (props) => {
  return (
    <>
      {props.element.id % 2 === 0 ? (
        <Link className="firstCard" to={`/beer/${props.element.id}`}>
          <div className="card__header">
            <span className="card__title">{props.element.brand}</span>
            <span className="card__title">{props.element.variety}</span>
          </div>
          <div className="card__body">
            <img
              className="card__img"
              variant="bottom"
              src={props.element.image}
            />
          </div>
        </Link>
      ) : (
        <Link className="secondCard" to={`/beer/${props.element.id}`}>
          <div className="card__header">
            <span className="card__title">{props.element.brand}</span>
            <span className="card__title">{props.element.variety}</span>
          </div>
          <div className="card__body">
            <img
              className="card__img"
              variant="bottom"
              src={props.element.image}
            />
          </div>
        </Link>
      )}
    </>
  );
};

DefaultCard.propTypes = {
  element: PropTypes.object,
};

export default DefaultCard;
