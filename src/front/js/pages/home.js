import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import Landing from "./landing";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <Fragment>
      <div className="text-center">
        <Navbar />
        <div className="btn mt-5">
          <Link to="/login">LOGIN</Link>
        </div>
        <div className="btn mt-5">
          <Link to="/register">REGISTER</Link>
        </div>
        <div>
          <Link to={"/beer"}>
            <h1>CERVEZAS</h1>
          </Link>
        </div>
        <div>
          <Link to={"/beer"}>
            <h1>ENSEÑAME LA BIRRA</h1>
          </Link>
        </div>
      </div>
      <Landing />
    </Fragment>
  );
};
