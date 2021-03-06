import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const WishButton = (props) => {
  const { store, actions } = useContext(Context);

  const storedUserId = localStorage.getItem("user_type_id");

  return (
    <button
      className="btn"
      onClick={() => {
        if (store.profileInfo.user_type) {
          console.log("No eres el usuario adecuado");
        } else {
          actions.addWishBeer(storedUserId, props.element);
        }
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
