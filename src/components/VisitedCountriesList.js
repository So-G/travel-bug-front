import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function VisitedCountriesList() {
  const [visitedCountriesList, setVisitedCountriesList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/visitedlocations').then((response) => {
      setVisitedCountriesList(response.data);
    });
  }, []);

  // const countries = [
  //   {
  //     name: 'Lyon',
  //     image: Lyon,
  //     year: 1988,
  //     description: 'Home ❤️',
  //     coordinates: {
  //       lat: 4.85,
  //       lng: 45.75,
  //     },
  //   },
  //   {
  //     name: 'Shanghai',
  //     image: Shanghai,
  //     year: 2017,
  //     description: 'Shanghai',
  //     coordinates: {
  //       lat: 31.224361,
  //       lng: 121.46917,
  //     },
  //   },
  //   {
  //     name: 'Kyoto',
  //     image: Kyoto,
  //     year: 2019,
  //     description: 'Japan',
  //   },

  //   {
  //     name: 'Uruguay',
  //     image: Uruguay,
  //     year: 2020,
  //     description: 'Uruguay',
  //   },
  // ];

  return (
    <div className="grid">
      <div className="cards">
        {visitedCountriesList.map((destination) => (
          <div className="card">
            <div className="card_image-container">
              <img
                className="countrypic"
                src={destination.background_image}
                alt={destination.name}
              />
            </div>
            <div className="card_content">
              <div className="card_title">
                {destination.name} - {destination.year}
              </div>
              <div className="card_info">
                <p> Description : {destination.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
