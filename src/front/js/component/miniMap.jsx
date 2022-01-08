import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Context } from "../store/appContext";
import L from "leaflet";

const MiniMap = (props) => {
  const { store, actions } = useContext(Context);
  const [brewerie, setBrewerie] = useState([]);

  useEffect(() => {
    setBrewerie([props.element]);
  }, [store.profileInfo]);

  const beerIcon = new L.icon({
    iconUrl:
      "https://res.cloudinary.com/de8eg0q3r/image/upload/v1640021736/noto_clinking-beer-mugs_rgwpyl.png",
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: (45, 45),
  });

  return (
    <>
      {brewerie.map((item, i) => {
        return (
          <div key={i}>
            <MapContainer
              center={{ lat: item.latitude, lng: item.longitude }}
              zoom={20}
              minZoom={10}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
              />
              <div>
                <Marker
                  position={{ lat: item.latitude, lng: item.longitude }}
                  icon={beerIcon}
                >
                  <Popup>{item.address}</Popup>
                </Marker>
              </div>
            </MapContainer>
          </div>
        );
      })}
    </>
  );
};

MiniMap.propTypes = {
  element: PropTypes.object,
};

export default MiniMap;
