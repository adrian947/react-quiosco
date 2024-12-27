import { Link } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { useState } from 'react';
import Cookies from 'js-cookie';

const Register = () => {
  const [dataForm, setDataForm] = useState({
    name: 'adrian',
    email: 'a@a.com',
    password: '123123',
    password_confirmation: '123123',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, email, password, password_confirmation } = dataForm;

      if (!name || !email || !password || !password_confirmation) {
        console.error('Todos los campos son obligatorios.');
        return;
      }

      const dataBody = {
        name,
        email,
        password,
        password_confirmation,
      };

      const { data } = await axiosInstance.post('register', dataBody);
      Cookies.set('token', data.token, { secure: true, sameSite: 'strict', expires: 7 });

    } catch (error) {
      if(!error.response) return
      setError(Object.values(error.response.data.errors))
    }
  };

  return (
    <>
      <h1 className='text-4xl font-black'>Create Account</h1>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='text-slate-800' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              className='mt-2 w-full p-3 bg-gray-50'
              id='name'
              name='name'
              placeholder='Your Name'
              value={dataForm.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='text-slate-800' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className='mt-2 w-full p-3 bg-gray-50'
              id='email'
              name='email'
              placeholder='Your Email'
              value={dataForm.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='text-slate-800' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              className='mt-2 w-full p-3 bg-gray-50'
              id='password'
              name='password'
              placeholder='Your Password'
              value={dataForm.password}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='text-slate-800' htmlFor='password_confirmation'>
              Repeat Password
            </label>
            <input
              type='password'
              className='mt-2 w-full p-3 bg-gray-50'
              id='password_confirmation'
              name='password_confirmation'
              placeholder='Repeat Your Password'
              value={dataForm.password_confirmation}
              onChange={handleChange}
            />
          </div>
          {
            error &&
            <p className='text-red-500'>{error}</p>
          }
          <input
            type='submit'
            value='Create Account'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full my-5 p-3 uppercase font-bold cursor-pointer'
          />
          <Link
            to='/login'
            className='text-indigo-400 flex justify-center underline'
          >
            Login account
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
