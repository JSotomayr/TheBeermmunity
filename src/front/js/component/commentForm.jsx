import React, { Fragment, useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

export const CommentForm = () => {
  const { store, actions } = useContext(Context);
  const [value, setValue] = useState(3);
  const [form, setForm] = useState({});

  let params = useParams();

  const brewer_id = localStorage.getItem("user_type_id");

  const onSubmit = (reviewData) => {
    actions.addBeerReview(brewer_id, params.id, reviewData);
  };

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
    <div className="formContainer">
      <h3 className="comment_subtitle">Tu review</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(form);
        }}
      >
        <div className="formContainer_review">
          <label className="form__label">Review</label>
          <textarea
            className="form__input"
            rows="4"
            cols="50"
            type="text"
            placeholder="Danos tu opinión"
            onChange={(e) => {
              setForm({ ...form, review_content: e.target.value });
            }}
          />
        </div>
        <div className="formContainer_rating">
          <label className="form__label">Rating</label>
          <div className="detail__rate">
            <Rating
              name="rating"
              value={value}
              max={5}
              icon={beerRate}
              emptyIcon={beerEmptyRate}
              onChange={(event, newValue) => {
                setValue(newValue);
                setForm({ ...form, rating: newValue });
              }}
            />
            <Box className="rating__num" sx={{ ml: 2 }}>
              {value}
            </Box>
          </div>
        </div>

        <input className="btn" type="submit" value="Comenta" />
      </form>
    </div>
  );
};
