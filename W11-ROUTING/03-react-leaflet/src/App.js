import Navigation from "./components/Navigation";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import marker from './marker2.png'
import { useState } from "react";
function App(props) {


  const customIcon = L.icon({
    iconUrl: marker,
    iconSize: [64, 64], // Size of the icon
    iconAnchor: [12, 41], // The point of the icon that will correspond to the marker's location
    popupAnchor: [0, -41], // The point from which the popup will "open" relative to the iconAnchor
  });
  
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  return (
    <>
      <Navigation />

        <MapContainer center={[52.49, 13.41]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "400px" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={[52.49, 13.41]} icon={customIcon}>
          <Popup>
           Hello this is London
          </Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
        
    </>
  );
}

export default App;