import axios from 'axios';
import { React, useState } from 'react';
import WishList from '../components/CountryWishList';

export default function BucketList() {
  // eslint-disable-next-line no-unused-vars
  const [wishList, setWishList] = useState(
    axios
      .get('http://localhost:5000/bucketlist')
      .then((response) => response.data)
      .then((data) => {
        console.log(data.results);
        setWishList(data.results);
      })
  );

  return (
    <>
      <h1>Bucket List</h1>
      <WishList />
    </>
  );
}
