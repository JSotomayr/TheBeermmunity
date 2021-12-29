import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Comment = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="commentContainer">
      <div>Image</div>
      <div>Username</div>
      <div>Comment</div>
      <div>Rating</div>
      <div>Date</div>
    </div>
  );
};

export default Comment;
