import Lyon from '../assets/LYON.jpg';
import Shanghai from '../assets/SHANGHAI.jpg';
import Kyoto from '../assets/KYOTO.jpg';
import Uruguay from '../assets/URUGUAY.jpg';

export const countries = [
  {
    name: 'Lyon',
    background_image: Lyon,
    year: 1988,
    description: 'Home ❤️',
    coordinates: {
      lat: 4.85,
      lng: 45.75,
    },
  },
  {
    name: 'Shanghai',
    background_image: Shanghai,
    year: 2017,
    description: 'Shanghai',
    coordinates: {
      lat: 31.224361,
      lng: 121.46917,
    },
  },
  {
    name: 'Kyoto',
    background_image: Kyoto,
    year: 2019,
    description: 'Japan',
  },

  {
    name: 'Uruguay',
    background_image: Uruguay,
    year: 2020,
    description: 'Uruguay',
  },
];

export default countries;
