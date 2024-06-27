import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../store/location/locationSlice";
const customIcon = L.icon({
  iconUrl: require("../assets/MapPlaceholder.png"),
  iconSize: [40, 33],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const HomeMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [userPosition, setUserPosition] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
      dispatch(getLocation());
    } else {
    }
  }, []);

  const location = useSelector((state) => state.location.data);
  const locfilter = location?.filter(
    (ph) => ph.user.role == "665de37ce9ef4cb7062684e0"
  );
  console.log("🚀 ~ HomeMap ~ locfilter:", locfilter);
  const mapLoca = location?.map((loc) => [loc.latitude, loc.longitude]);
  return (
    <div className="z-30">
      {userPosition ? (
        <MapContainer
          center={userPosition || position}
          zoom={20}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {userPosition ? (
            <Marker position={userPosition} icon={customIcon}>
              <Popup>موفعك الحالي</Popup>
            </Marker>
          ) : (
            <div>يوجد خطأ</div>
          )}

          {locfilter?.map((loc) => (
            <Marker position={[loc.latitude, loc.longitude]}>
              <Popup keepInView>
                {loc.user.firstName}:{loc.user.lastName}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : (
        <div> no position</div>
      )}
    </div>
  );
};

export default HomeMap;
