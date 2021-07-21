const DestinationDetails = ({ name, year, description }) => (
  <div className="country-card">
    <h1>{name}</h1>
    <p> Visited in : {year} </p>
    <p>Description : {description}</p>
  </div>
);

export default DestinationDetails;
