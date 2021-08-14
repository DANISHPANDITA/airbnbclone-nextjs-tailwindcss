/** @format */
import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
function Map({ hotels }) {
  const [LocationSelected, setLocationSelected] = useState({});
  const center = hotels.map((hotel) => ({
    latitude: hotel.lat,
    longitude: hotel.lng,
  }));
  const x = getCenter(center);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "43%",
    latitude: x.latitude,
    longitude: x.longitude,
    zoom: 10,
  });
  return (
    <ReactMapGL
      mapStyle={process.env.map_styleurl}
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}>
      {hotels.map((loc) => (
        <div key={loc.lng}>
          <Marker
            latitude={parseFloat(loc.lat)}
            longitude={parseFloat(loc.lng)}
            offsetLeft={-20}
            offsetTop={-10}>
            <p
              onClick={() => setLocationSelected(loc)}
              className="animate-bounce hover:cursor-pointer">
              📍
            </p>
          </Marker>
          {parseFloat(LocationSelected.lng) === parseFloat(loc.lng) ? (
            <Popup
              latitude={parseFloat(loc.lat)}
              longitude={parseFloat(loc.lng)}
              closeOnClick={true}
              onClose={() => {
                setLocationSelected({});
              }}>
              {LocationSelected.name} ⭐{LocationSelected.rating}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}
export default Map;
