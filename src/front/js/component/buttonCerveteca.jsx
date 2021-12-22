import React, { useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ButtonCerveteca = (props) => {
    const { store, actions } = useContext(Context);
    console.log("ESTO ESTA AL INICIO", store.tastedBeer)
    return(
        <button
			className="btn"
			onClick={(event) => {
				event.preventDefault();
				actions.addTastedBeer(props.element);
				console.log(store.tastedBeer);
			}}>
			Cerveteca
	</button>
    )
};

ButtonCerveteca.propTypes = {
    element: PropTypes.object
}

export default ButtonCerveteca;
