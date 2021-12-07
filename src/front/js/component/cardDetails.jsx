import React from "react";
import PropTypes from "prop-types";

const CardDetails = (props) => {
    return ( 
        <div className="detail">
            <div className="detail__image">
                <img src={props.element.image} alt="top" />
            </div>
            <div className="detail__body">
                <h2>{props.element.brand} {props.element.variety}</h2>
                <h3>{props.element.origin}</h3>
                <ul>
                    <li>{props.element.style}</li>
                    <li>{props.element.obv}</li>
                    <li>{props.element.drinking_temperature}</li>
                </ul>
                <p>{props.element.description}</p>
                <span>{props.element.publishment_date}</span>

            </div>
        </div>
    );
};

CardDetails.propTypes = {
    element: PropTypes.object
};

export default CardDetails;