import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

function Example() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true, maxLength: 20 })} />
      <input {...register('password', { pattern: /^[A-Za-z]+$/i })} />
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById('oot');
ReactDOM.render(<Example />, rootElement);
