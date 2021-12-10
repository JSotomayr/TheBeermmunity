import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DefaultCard = props => {
	return (
		<div className="card">
			<div>
				<Link to={`/beer/${props.element.id}`}>
					<div className="card__body">
						<span className="card__title">{props.element.name}</span>
						<img className="card__img" variant="bottom" src={props.element.image} />
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
