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
    >
      <TileLayer
        attribution='&copy; <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}"
        ext="jpg"
      />
      <Marker position={[45.75, 4.85]}>
        <Popup>
          Lyon 🦁 <br /> This is Home...
        </Popup>
      </Marker>
    </MapContainer>
  );
}
