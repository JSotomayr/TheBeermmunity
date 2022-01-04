import React, { Fragment } from "react";
import "../../styles/homeLog.scss";

export const HomeLog = () => {
  return (
    <Fragment>
      <div className="homeLog_container">
        <div className="homeLog_container_favourites"></div>
        <p>Favoritos</p>
        <p>Ver todo</p>

        <p>Buscar por categoría</p>
        <p>Artículos populares</p>
        <p>Buscar marcas</p>
        <p>Novedades</p>
        <p>Cervezas</p>
      </div>
    </Fragment>
  );
};
