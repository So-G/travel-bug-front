import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        {...register('Name', { required: true, maxLength: 80 })}
      />
      <input
        type="url"
        placeholder="Link to image"
        {...register('Link to image', { required: true, maxLength: 252 })}
      />
      <input
        type="text"
        placeholder="Description"
        {...register('Description', {})}
      />
      <input type="url" placeholder="Flight" {...register('Flight', {})} />
      <input
        type="number"
        placeholder="lat"
        {...register('lat', { required: true })}
      />
      <input
        type="number"
        placeholder="lng"
        {...register('lng', { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
