import React from "react";
import PropTypes from "prop-types";

const ProfileCard = (props) => {

        return(
            <div>
                <div>
                    <img src={props.element.image}/>
                    <h2>{props.element.username}</h2>
                    <h3>{props.element.company_name}</h3>
                    <span>{props.element.city}, {props.element.country}</span>
                    <span>{props.element.address}</span>
                </div>
                <div>
                    {props.element.description}
                </div>
            </div>
        )
}

ProfileCard.propTypes= {
    element: PropTypes.object
}

export default ProfileCard;