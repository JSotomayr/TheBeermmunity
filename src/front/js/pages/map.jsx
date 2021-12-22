import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Context } from "../store/appContext";
import L from "leaflet";

const Map = (props) => {
  const { store, actions } = useContext(Context);
  const [brewerie, setBrewerie] = useState([]);

  useEffect(() => {
    actions.getAllBreweries();
  }, []);

  const beerIcon = new L.icon({
    iconUrl:
      "https://res.cloudinary.com/de8eg0q3r/image/upload/v1640021736/noto_clinking-beer-mugs_rgwpyl.png",
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: (45, 45),
  });

  useEffect(() => {
    setBrewerie(store.breweries);

    /*     setBrewerie(
      store.breweries.forEach(element => {
        
      });((info) => {
        return (
          <div key={info.id}>
            <Marker
              position={{ lat: info.latitude, lng: info.longitude }}
              icon={beerIcon}
            >
              <Popup></Popup>
            </Marker>
          </div>
        );
      })
    ); */
  }, [store.breweries]);
  console.log("ESTO ES EL CONST", brewerie);
  console.log("ESTO ES EL FLUX", store.breweries);
  return (
    <div className="map-container">
      <MapContainer
        center={{ lat: "0", lng: "0" }}
        zoom={2}
        minZoom={2}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
        />
        {brewerie.map((item, i) => {
          return (
            <div key={i}>
              <Marker
                position={{ lat: item.latitude, lng: item.longitude }}
                icon={beerIcon}
              >
                <Popup>{item.address}</Popup>
              </Marker>
            </div>
          );
        })}
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  element: PropTypes.object,
};

export default Map;
