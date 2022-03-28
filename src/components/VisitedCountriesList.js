/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { countries } from '../data/countryList';

export default function VisitedCountriesList() {
  // const [visitedCountriesList, setVisitedCountriesList] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:5000/visitedlocations').then((response) => {
  //     setVisitedCountriesList(response.data);
  //   });
  // }, []);

  return (
    <div className="grid">
      <div className="cards">
        {countries.map((destination) => (
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
