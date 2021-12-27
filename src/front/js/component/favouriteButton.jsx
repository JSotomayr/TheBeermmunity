import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/favouriteButton.scss";

const FavouriteButton = (props) => {
  const { store, actions } = useContext(Context);

  console.log(localStorage.getItem("user"));

  const storedUserId = localStorage.getItem("user");

  console.log(storedUserId);
  return (
    <button
      className="btn"
      onClick={() => {
        actions.addFavourite(storedUserId, props.element);
      }}
    >
      Favoritos
    </button>
  );
};

FavouriteButton.propTypes = {
  element: PropTypes.object,
};

export default FavouriteButton;
