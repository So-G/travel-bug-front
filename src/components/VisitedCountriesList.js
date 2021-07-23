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
  },
  {
    name: 'Shanghai',
    image: Shanghai,
    year: 2017,
    description: 'Shanghai',
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

function VisitedCountriesList() {
  return (
    <div className="cardcontainer">
      <div className="country-card">
        {countries.map((destination) => (
          <>
            <h1>{destination.name}</h1>
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
