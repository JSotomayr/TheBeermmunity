import React, { useContext} from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const GenericButton = (props) => {
    const { store, actions } = useContext(Context);
    return(
        <button
			className="btn"
			variant="danger"
			onClick={() => {
				{props.add}
			}}>
				{props.name}
		</button>
    )
};

GenericButton.propTypes = {
    name: PropTypes.string,
    add: PropTypes.func
}

export default GenericButton;