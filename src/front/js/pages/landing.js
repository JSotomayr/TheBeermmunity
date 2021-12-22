import React, { useContext, Component, Fragment } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import "../../styles/landing.scss";
import logoBig from "../../img/logoBig.png";

const Landing = () => {
  return (
    <Fragment>
      <div className="homeTop">
        <p>
          <img src={logoBig} />
        </p>
        <h1 className="titleBeBeer">
          UNA RED SOCIAL PARA AMANTES DE LA CERVEZA ARTESANAL
        </h1>
      </div>
      <div className="landingDescription container-fluid row">
        <div className="beerLovers">
          <img
            className="brewersPhoto"
            src="https://images.pexels.com/photos/1267244/pexels-photo-1267244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=460"
          ></img>
          <p className="brewersText">
            Conectamos amantes de la cerveza ofreciéndoles un lugar donde
            compartir y encontrar sus cervezas artesanales favoritas, así como
            también las mejores cervecerías y eventos relacionados.
          </p>
        </div>
        <div className="description">
          <img
            className="brewersPhoto"
            src="https://images.pexels.com/photos/5935229/pexels-photo-5935229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=460"
          ></img>
          <p className="brewersText">
            Creemos firmemente en la necesidad de ofrecer un espacio para esa
            comunidad que disfruta de las mejores cervezas artesanas en España.
            Estamos aquí para aquell@s que buscan el sabor y calidad más que la
            cantidad.
          </p>
          <p className="brewersText">
            Queremos promover la cerveza artesanal y los lugares que la
            fomentan.
          </p>
        </div>
      </div>
      <div className="iAmAbrewer container-fluid row">
        <div className="iAmAbrewer1 col-md-4 col-xs-12">
          <p className="iAmAbrewerTitle">¡Únete a BeBeer!</p>
        </div>
      </div>
      <div className="iAmAbrewerie container-fluid row">
        <div className="iAmAbrewerie1 col-md-4 col-xs-12">
          <p className="iAmAbrewerieTitle">
            ¡Este es el espacio ideal para tu cevecería!
          </p>
        </div>
        <div className="iAmAbrewerie3 col-md-4 col-xs-12">
          <button className="iAmAbrewerieText1">
            ¡Participa en los mejores eventos!
          </button>
          <button className="iAmAbrewerieText2">
            ¿Te gustaría publicar tus eventos como cevecería?
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
