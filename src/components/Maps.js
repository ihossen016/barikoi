import "../components/Maps.css";
import Map from "react-map-gl";

const Maps = ({ place }) => {
  return (
    <Map
      className="maps"
      mapboxAccessToken="pk.eyJ1Ijoibmhvc3NlbjIwOCIsImEiOiJjbDE1dmtiYzAwMzU2M3Btd3piaDVub3FqIn0.OGRrQJkKg9irhdpwcxUlWA"
      initialViewState={{
        longitude: 90.39964904382168,
        latitude: 23.864057526512067,
        zoom: 14,
      }}
      mapStyle="mapbox://styles/nhossen208/cl15wl504000p14nzajdwfbvg"
    />
  );
};

export default Maps;
