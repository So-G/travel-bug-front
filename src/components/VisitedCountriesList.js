import Lyon from '../assets/LYON.jpg';
import Shanghai from '../assets/SHANGHAI.JPG';

const countries = [
  {
    id: 1,
    name: 'Canada',
    image: 'random image',
    year: 2003,
    description: 'Canada ',
  },
  {
    id: 2,
    name: 'Lyon',
    image: { Lyon },
    year: 1988,
    description: 'Home ❤️',
  },
  {
    id: 3,
    name: 'Shanghai',
    image: { Shanghai },
    year: 2017,
    description: 'Shanghai ',
  },
];

function VisitedCountriesList() {
  return (
    <div className="country-card">
      {countries.map((destination) => (
        <>
          <h1>{destination.name}</h1>
          <img src={destination.image} alt={destination.name} />
          <p> Visited in : {destination.year} </p>
          <p> Description : {destination.description}</p>
        </>
      ))}
    </div>
  );
}

export default VisitedCountriesList;
