import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ButtonCerveteca = (props) => {
  const { store, actions } = useContext(Context);

  const storedUserId = localStorage.getItem("user");

  return (
    <button
      className="btn"
      onClick={() => {
        if (store.profileInfo.user_type) {
          console.log("No eres el usuario adecuado");
        } else {
          actions.addTastedBeer(storedUserId, props.element);
        }
      }}
    >
      Cerveteca
    </button>
  );
};

ButtonCerveteca.propTypes = {
  element: PropTypes.object,
};

export default ButtonCerveteca;
