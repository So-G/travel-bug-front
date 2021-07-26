import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { selectIcon } from './mapMarkers';

export default function Map({
  pins = [
    {
      name: 'Lyon',
      description: 'Home ❤️',
      lat: 45.75,
      lng: 4.85,
      visited: 'ok',
    },
    {
      name: 'Shanghai',
      description: 'Shanghai',
      lat: 31.224361,
      lng: 121.46917,
      visited: 'ok',
    },

    {
      name: 'Kyoto',
      description: '⛩',
      lat: 35.011665,
      lng: 135.768326,
      visited: 'ok',
    },

    {
      name: 'Uruguay',
      description: 'Uruguay',
      lat: -34.901112,
      lng: -56.164532,
      visited: 'ok',
    },
  ],
}) {
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
      {pins.map(({ name, description, lat, lng }) => (
        <Marker key={name} position={[lat, lng]}>
          <Popup>
            {name}, {description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
