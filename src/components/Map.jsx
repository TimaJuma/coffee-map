import React from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import shops from "../data/shops";
import Menu from "./Menu";

const mapContainerStyle = {
  width: "80vw",
  height: "100vh",
};

const defaultCenter = { lat: 51.033352, lng: -114.071446 };

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [coffeeshop, selectCoffeeshop] = React.useState(null);
  const onCoffeeClick = React.useCallback((shop) => {
    console.log("onCofeeClick", shop);
    // selectCoffeeshop();
  }, []);

  if (loadError) return "Error loading maps";

  if (!isLoaded) return "Loading maps";

  return (
    <div className="App">
      <GoogleMap
        options={options}
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={defaultCenter}
      >
        <>
          {shops.map((shop) => (
            <Marker
              key={shop.name}
              position={{
                lat: shop.coordinates.lat,
                lng: shop.coordinates.lng,
              }}
              onClick={() => selectCoffeeshop(shop)}
              icon={{
                url: `/cup.svg`,
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              label={shop.name}
            />
          ))}
          {/* {coffeeshop && (
            <InfoWindow
              position={{
                lat: coffeeshop.coordinates.lat,
                lng: coffeeshop.coordinates.lng,
              }}
              onCloseClick={() => selectCoffeeshop(null)}
            >
              {coffeeshop.name}
            </InfoWindow>
          )} */}
        </>
      </GoogleMap>
      {coffeeshop && <Menu shop={coffeeshop} />}
    </div>
  );
};

export default Map;
