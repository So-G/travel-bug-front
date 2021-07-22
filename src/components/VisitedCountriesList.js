const countries = [
  {
    id: 1,
    name: 'Canada',
    background_image: 'random image',
    year: 2003,
    description:
      "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the world's second-largest country by total area",
  },
  {
    id: 2,
    name: 'Lyon',
    background_image:
      '/Users/solenewcs/Desktop/Checkpoint 4/travel-bug/src/assets/LYON.JPG',
    year: 1988,
    description: 'Home ❤️',
  },
  {
    id: 3,
    name: 'Shanghai',
    background_image:
      '/Users/solenewcs/Desktop/Checkpoint 4/travel-bug/src/assets/SHANGHAI.JPG',
    year: 2017,
    description:
      "Shanghai is one of the four direct-administered municipalities of the People's Republic of China, governed by the State Council. The city is located on the southern estuary of the Yangtze River, with the Huangpu River flowing through it. With a population of 24.28 million as of 2019, it is the most populous urban area in China and the most populous city proper in the world. Shanghai is a global center for finance, research, technology, manufacturing, and transportation, and the Port of Shanghai is the world's busiest container port.",
  },
];

function VisitedCountriesList() {
  return (
    <div className="country-card">
      {countries.map((destination) => (
        <>
          <h1>{destination.name}</h1>
          <p> Visited in : {destination.year} </p>
          <p> Description : {destination.description}</p>
        </>
      ))}
    </div>
  );
}

export default VisitedCountriesList;
