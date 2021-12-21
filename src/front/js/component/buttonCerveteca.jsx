import React, { useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const GenericButton = (props) => {
    const { store, actions } = useContext(Context);
    return(
        <button
			className="btn"
			onClick={() => {
				actions.addTastedBeer(props.element)}
			}>
			Cerveteca
		</button>
    )
};

GenericButton.propTypes = {
    element: PropTypes.object
}

export default GenericButton;