import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router';
import { useLoaderData } from 'react-router';

const OSM_BASE_URL = 'https://nominatim.openstreetmap.org/search';

export default function AddressMap() {
  const data = useLoaderData(); // [lat, lon]
  console.log("Loader data:", data);
    
            const { lat, lon, display_name } = data[0];
            const address1 = display_name;
            console.log("Geocoded data:", lat, lon, address1);
            //return [lat, lon, address];
        
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (lat && lon) {
      setPosition([parseFloat(lat), parseFloat(lon)]);
      setAddress(address1);
    }
  }, [lat, lon, address1]);

  return position ? (
    <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  ) : (
    <p>Loading map...</p>
  );
}
