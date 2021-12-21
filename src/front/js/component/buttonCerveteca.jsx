import React, { useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ButtonCerveteca = (props) => {
    const { store, actions } = useContext(Context);
    return(
        <button
			className="btn"
			onClick={() => {
				actions.addTastedBeer(props.element)
				console.log(store.tastedBeer)
			}}>
			Cerveteca
		</button>
    )
};

ButtonCerveteca.propTypes = {
    element: PropTypes.object
}

export default ButtonCerveteca;