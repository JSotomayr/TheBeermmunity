import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const ProfileCard = (props) => {
    const { actions, store } = useContext(Context)
    const [generateProfile, setGenerateProfile] = useState([]);

    useEffect(() => {
        if(store.profileInfo.user_type){
            setGenerateProfile(
                <div>
                    <div>
                        <img src={props.element.image}/>
                        <h2>{props.element.user_detail.username}</h2>
                        <h3>{props.element.company_name}</h3>
                        <span>{props.element.city}, {props.element.country}</span>
                        <span>{props.element.user_detail.address}</span>
                    </div>
                    <div>
                        {props.element.description}
                    </div>
                </div>
            )
        }else{
            setGenerateProfile(
                <div>
                    <div>
                        <img src={props.element.image}/>
                        <h2>{props.element.username}</h2>
                        <h3>{props.element.user_detail.name} {props.element.user_detail.lastname}</h3>
                        <span>{props.element.city}, {props.element.country}</span>
                    </div>
                    <div>
                        {props.element.description}
                    </div>
                </div>
            )
        }
    }, [])

        return <div>{generateProfile}</div>;
}

ProfileCard.propTypes= {
    element: PropTypes.object
}

export default ProfileCard;