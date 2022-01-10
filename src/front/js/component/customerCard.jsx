import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../styles/customerCard.scss";

const CustomerCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Link to={`/profile/${props.element.id}`}>
        <div className="customerContainer">
          <div className="customer__card">
            <img
              className="customerContainer__image"
              src={props.element.image}
            />
          </div>
          <div className="customerContainer__right">
            <div className="customerContainer__text">
              <div className="customerContainer__title">
                {props.element.username}
              </div>
              <div className="customerContainer__subtitle">
                {props.element.city}, {props.element.country}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

CustomerCard.propTypes = {
  element: PropTypes.object,
};

export default CustomerCard;
