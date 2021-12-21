import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/defaultCard.scss";

const DefaultCard = props => {
	return (
		<div className="card">
				<Link to={`/beer/${props.element.id}`}>
					<div className="card__body">
						<span className="card__title">{props.element.brand}</span> 
						<span className="card__title">{props.element.variety}</span>
						<img className="card__img" variant="bottom" src={props.element.image} />
					</div>
				</Link>
		</div>
	);
};

DefaultCard.propTypes = {
	element: PropTypes.object
};

export default DefaultCard;