import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const WishButton = (props) => {
  const { store, actions } = useContext(Context);

  const storedUserId = localStorage.getItem("user");

  return (
    <button
      className="btn"
      onClick={() => {
        actions.addWishBeer(storedUserId, props.element);
      }}
    >
      Pendiente
    </button>
  );
};

WishButton.propTypes = {
  element: PropTypes.object,
};

export default WishButton;
