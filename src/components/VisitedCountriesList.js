import Lyon from '../assets/LYON.jpg';
import Shanghai from '../assets/SHANGHAI.JPG';
import Kyoto from '../assets/KYOTO.jpg';
import Uruguay from '../assets/URUGUAY.jpg';

const countries = [
  {
    name: 'Lyon',
    image: Lyon,
    year: 1988,
    description: 'Home ❤️',
    coordinates: {
      lat: 4.85,
      lng: 45.75,
    },
  },
  {
    name: 'Shanghai',
    image: Shanghai,
    year: 2017,
    description: 'Shanghai',
    coordinates: {
      lat: 31.224361,
      lng: 121.46917,
    },
  },
  {
    name: 'Kyoto',
    image: Kyoto,
    year: 2019,
    description: 'Japan',
  },

  {
    name: 'Uruguay',
    image: Uruguay,
    year: 2020,
    description: 'Uruguay',
  },
];

// faire le map et API here

function VisitedCountriesList() {
  return (
    <div className="cards">
      <div className="card">
        {countries.map((destination) => (
          <>
            <h3>{destination.name}</h3>
            <img
              className="countrypic"
              src={destination.image}
              alt={destination.name}
            />
            <p> Visited in : {destination.year} </p>
            <p> Description : {destination.description}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default VisitedCountriesList;
