import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/defaultCard.scss";

const DefaultCard = props => {
	return (
		<div className="card">
			<div>
				<Link to={`/beers/${props.element.id}`}>
					<div className="card__body">
						<h2 className="card__title">{props.element.brand} {props.element.variety}</h2>
						<img className="card__img" variant="top" src={props.element.image} />
					</div>
				</Link>
			</div>
		</div>
	);
};

DefaultCard.propTypes = {
	element: PropTypes.object
};

export default DefaultCard;
