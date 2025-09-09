import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router';

const OSM_BASE_URL = 'https://nominatim.openstreetmap.org/search';

export default function AddressMap() {
  const location = useLocation();
  const address = location.state?.address;

  const [position, setPosition] = useState(null);
console.log("Address in AddressMap:", address);

  useEffect(() => {
    async function geocodeAddress() {
      try {
        const res = await fetch(
          `${OSM_BASE_URL}?q=${encodeURIComponent(address)}&format=json`
        );
        const data = await res.json();
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        }
      } catch (error) {
        console.error('Geocoding failed:', error);
      }
    }

    if (address) {
      geocodeAddress();
    }
  }, [address]);

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
