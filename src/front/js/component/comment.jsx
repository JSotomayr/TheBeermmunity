import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import "../../styles/comment.scss";

const Comment = (props) => {
  const { store, actions } = useContext(Context);

  const beerRate = (
    <img
      className="full_beer"
      src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1640793667/full.beer_wotybg.png"
      alt="full_beer"
    />
  );
  const beerEmptyRate = (
    <img
      className="empty_beer"
      src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1640793667/empty.beer_iuwdku.png"
      alt="empty_beer"
    />
  );

  return (
    <div className="comment">
      <div className="imageContainer">
        <img className="comment__image" src={props.element.image} />
      </div>
      <div className="comment__detail">
        <div>
          <div className="comment__username">{props.element.username}</div>
          <div className="comment__content">{props.element.review_content}</div>
        </div>
        <div className="comment__bottom">
          <div className="rating__box">
            <Rating
              name="rating"
              value={props.element.rating}
              readOnly
              icon={beerRate}
              emptyIcon={beerEmptyRate}
            />
            <Box className="rating__num" sx={{ ml: 2 }}>
              {props.element.rating}
            </Box>
          </div>
          <div className="comment__date">{props.element.publishment_date}</div>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  element: PropTypes.object,
};
export default Comment;
