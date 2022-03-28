// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// // import history from '../history';

// export default function AddNewCountry() {
//   const { register, handleSubmit } = useForm();

//   // const notifySucces = () => {
//   //   toast.success(
//   //     'Congratulations, a new country was added to your bucket list ✈️🌎'
//   //   );
//   // };

//   // const notifyFail = () => {
//   //   toast.error('Something went wrong');
//   // };

//   const onSubmit = async (form) => {
//     try {
//       await axios.post('http://localhost:5000/bucketlist', form);
//       console.log(
//         'Congratulations, a new country was added to your bucket list ✈️🌎'
//       );
//     } catch (err) {
//       if (err) {
//         console.log('Something went wrong here');
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} method="POST" action="send">
//       <input
//         type="text"
//         placeholder="Name"
//         {...register('Name', { required: true, maxLength: 80 })}
//       />
//       <input
//         type="url"
//         placeholder="Link to image"
//         {...register('Link to image', { required: true, maxLength: 252 })}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         {...register('Description', {})}
//       />
//       <input type="url" placeholder="Flight" {...register('Flight', {})} />
//       <input
//         type="decimal"
//         placeholder="lat"
//         {...register('lat', { required: true })}
//       />
//       <input
//         type="number"
//         placeholder="lng"
//         {...register('lng', { required: true })}
//       />

//       <input type="submit" />
//     </form>
//   );
// }
