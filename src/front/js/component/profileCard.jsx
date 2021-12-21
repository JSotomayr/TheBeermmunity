import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/profile.scss"


const ProfileCard = (props) => {
    const { actions, store } = useContext(Context)
    const [generateProfile, setGenerateProfile] = useState();

    return (
            <>
                {store.currentUser.sub.user_type == true ? 
                    (<div className="profileContainer">
                        <div className="profileContainer__top">
                            <img className="profileContainer__img" src={props.element.image}/>
                            <h2 className="profileContainer__title">{props.element.username}</h2>
                            <h3 className="profileContainer__subtitle">{props.element.user_detail[0].company_name}</h3>
                            <span className="profileContainer__text">{props.element.city}, {props.element.country}</span>
                            <span className="profileContainer__text">{props.element.user_detail[0].address}</span>
                        </div>
                        <div className="profileContainer__description">
                            {props.element.description}
                        </div>
                    </div>) : 
                store.currentUser.sub.user_type == false ? 
                    (<div className="profileContainer">
                        <div className="profileContainer__top">
                            <img className="profileContainer__img" src={props.element.image}/>
                            <div className="profileContainer__details">
                                <h2 className="profileContainer__title">{props.element.username}</h2>
                                <h3 className="profileContainer__subtitle">{props.element.user_detail[0].name} {props.element.user_detail[0].lastname}</h3>
                                <span className="profileContainer__text">{props.element.city}, {props.element.country}</span>
                            </div>
                        </div>
                        <div className="profileContainer__description">
                            {props.element.description}
                        </div>
                    </div>) : 
                null}
            </>
        );
}

ProfileCard.propTypes= {
    element: PropTypes.object
}

export default ProfileCard;