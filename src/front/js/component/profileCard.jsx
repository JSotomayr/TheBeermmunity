import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/profile.scss"


const ProfileCard = (props) => {
    const { actions, store } = useContext(Context)
    const [generateProfile, setGenerateProfile] = useState([]);

    useEffect(() => {
        if(store.profileInfo.user_type){
            setGenerateProfile(
                <div className="profileContainer">
                    <div className="profileContainer__top">
                        <img className="profileContainer__img" src={props.element.image}/>
                        <h2 className="profileContainer__title">{props.element.username}</h2>
                        <h3 className="profileContainer__subtitle">{props.element.user_detail.company_name}</h3>
                        <span className="profileContainer__text">{props.element.city}, {props.element.country}</span>
                        <span className="profileContainer__text">{props.element.user_detail.address}</span>
                    </div>
                    <div className="profileContainer__description">
                        {props.element.description}
                    </div>
                </div>
            )
        }else{
            setGenerateProfile(
                <div className="profileContainer">
                    <div className="profileContainer__top">
                        <img className="profileContainer__img" src={props.element.image}/>
                        <div className="profileContainer__details">
                            <h2 className="profileContainer__title">{props.element.username}</h2>
                            <h3 className="profileContainer__subtitle">{props.element.user_detail.name} {props.element.user_detail.lastname}</h3>
                            <span className="profileContainer__text">{props.element.city}, {props.element.country}</span>
                        </div>
                    </div>
                    <div className="profileContainer__description">
                        {props.element.description}
                    </div>
                </div>
            )
        }
    }, [])

        return <Fragment>{generateProfile}</Fragment>;
}

ProfileCard.propTypes= {
    element: PropTypes.object,
    subelement: PropTypes.object
}

export default ProfileCard;