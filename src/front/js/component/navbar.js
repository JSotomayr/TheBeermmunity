import React, { Fragment } from "react";
import logoSmall from "../../img/logoSmall.png";
import "../../styles/navbar.scss";
import MenuListComposition from "../component/menuListComposition.jsx";

import { Link } from "react-router-dom";
import AccountMenu from "../component/accountMenu.jsx";

export const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className=" icons_left">
          <MenuListComposition />
        </div>
        <Link to={"/"}>
          <div className="icons_center">
            <img
              className="logoNavbar"
              src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1641555560/TheBeermmunity_logos_colores-05_c8id3v.png"
            />
          </div>
        </Link>

        <div className="nabvar_menu">
          <Link to={"/beer"}>
            <div className="btn container_btn_beers m-2">CERVEZAS</div>
          </Link>
          <Link to={"/map"}>
            <div className="btn container_btn_breweries m-2">CERVECERIAS</div>
          </Link>
          <Link to={"/brewers"}>
            <div className="btn container_btn_brewers m-2">CERVECEROS</div>
          </Link>
        </div>
        {localStorage.getItem("logged") ? (
          <div className="icons_right">
            <div className="userIconText">
              <AccountMenu />
            </div>

            <Link to={`/profile/${localStorage.getItem("user")}/favourite`}>
              <div className="HeartIconText">
                <i className="far fa-heart"></i>
                <p className="infoIcon">Favoritos</p>
              </div>
            </Link>
          </div>
        ) : (
          <div className="icons_right">
            <div className="userIconText">
              <AccountMenu />
            </div>
          </div>
        )}
      </nav>
    </Fragment>
  );
};
