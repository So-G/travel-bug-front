import L from 'leaflet';
import favorite from '../assets/Star.png';
import plane from '../assets/PLANE.png';

const selectIconType = (visited) => {
  // if (visited === 'ok') {
  //   return favorite;
  // }

  // if (visited === null) {
  //   return plane;
  // }
  if (visited === 'ok') {
    return favorite;
  }

  return plane;
};

export default function selectIcon(visited) {
  const iconHeight = 30;
  const iconWidth = 20;

  return new L.Icon({
    iconUrl: selectIconType(visited),
    iconAnchor: [iconWidth / 2, iconHeight],
    popupAnchor: [0, -iconHeight],
    iconSize: [iconWidth, iconHeight],
    className: 'leaflet-div-icon',
  });
}
