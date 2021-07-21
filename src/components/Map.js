import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
  return (
    <MapContainer
      style={{
        height: '340px',
        width: '580px',
      }}
      center={[45.75, 4.85]}
      zoom={1}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[45.75, 4.85]}>
        <Popup>
          Lyon 🦁 <br /> This is Home...
        </Popup>
      </Marker>
    </MapContainer>
  );
}
