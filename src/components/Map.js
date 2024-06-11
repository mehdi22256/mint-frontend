import React from "react";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: require("../assets/pin.png"),
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});
const customIconP = L.icon({
  iconUrl: require("../assets/placeholder.png"),
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});

const staticLocations = [
  { latitude: 32.047866696001364, longitude: 44.37240458442438, name: "Kufah" },
  {
    latitude: 32.04601976910479,
    longitude: 44.360781962597194,
    name: "صيدلية الافنان",
  },
];
const Map = ({ showmap, onClose, setlocation, location }) => {
  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setlocation({ latitude, longitude });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (!showmap) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-10 flex justify-center items-center">
      <div className="bg-primary w-[800px] h-[600px] flex flex-col justify-center items-center bg-opacity-20 rounded-md">
        {location.latitude && location.longitude && (
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={13}
            style={{ height: "90%", width: "85%" }}
            className="m-3"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              icon={customIcon}
              position={[location.latitude, location.longitude]}
              draggable={true}
              eventHandlers={{
                dragend: (event) => {
                  const newPos = event.target.getLatLng();
                  setlocation({ latitude: newPos.lat, longitude: newPos.lng });
                },
              }}
            >
              <Popup>
                <h1>موفعك </h1>
              </Popup>
            </Marker>
            {staticLocations.map((loc, index) => (
              <Marker
                key={index}
                position={[loc.latitude, loc.longitude]}
                icon={customIconP}
              >
                <Popup>{loc.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        )}{" "}
        <button
          className="bg-primary p-2 m-2 text-white rounded-md"
          onClick={onClose}
        >
          حدد الموقع
        </button>
      </div>{" "}
    </div>
  );
};

export default Map;
