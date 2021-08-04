/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Passport from '../assets/Passport.png';

export default function WishList() {
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/bucketlist').then((response) => {
      setWishList(response.data);
    });
  }, []);

  return (
    <div className="grid">
      <section className="cards">
        {wishList.map((destination) => (
          <div className="card">
            <div className="card_image-container">
              <img
                className="countrypic"
                src={destination.background_image}
                alt={destination.name}
              />
            </div>
            <div className="card_content">
              <div className="card_title">{destination.name}</div>
              <div className="card_info">
                <p> Description : {destination.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="card">
          <div className="add_card_content">
            <div className="add_card_info">
              Add a new destination to your bucket list{' '}
              <img className="passport" src={Passport} alt="button" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
