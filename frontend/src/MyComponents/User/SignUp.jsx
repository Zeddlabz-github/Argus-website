import React, { useState } from 'react';
import logo from './../../argus website/PNG/Logo Vectors.png';
import { signup } from '../../helpers/auth';
import Header from '../Partials/Header';
import Header2 from '../Partials/Header2';
import MobileHeader from '../Partials/MobileHeader';
import Stickynav from '../Partials/Stickynav';

const SignUp = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (event) => {
    setData({
      ...data,
      email: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    setData({
      ...data,
      password: event.target.value,
    });
  };

  const { email, password } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    signup({ email, password })
      .then((data) => {
        setData({
          ...data,
          email: '',
          password: '',
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      
    <Header />
    <Header2 />
    <MobileHeader />
    <Stickynav />

    <div className='p-20 h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center bg-hero'>
      <div className='content text-3xl text-center md:text-left lg:w-2/3'>
        <h1 className='text-5xl text-gray-700 font-bold'>Argus Security</h1>
        <p>Your partners in protection</p>
      </div>
      <div className='container mx-auto flex flex-col items-center'>
        <form
          className='shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center'
          onSubmit={handleSubmit}>
          <img src={logo} alt='Logo' className='w-20 mb-3' />
          <div classname='w-full flex flex-col item-center'>
            <hr className='w-1/3 border-1 border-black' />
            <p>or</p>
            <hr className='w-1/3 border-1 border-black' />
          </div>
          <input
            className='w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1'
            type='email'
            placeholder='Email'
            value={data.email}
            onChange={handleEmailChange}
          />
          <input
            className='w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1'
            type='password'
            placeholder='Password'
            value={data.password}
            onChange={handlePasswordChange}
          />

          <button className='w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg'>
            Next
          </button>
          <p className='text-gray-900 font-bold text-center my-2'>
            Already Registered?<span className='text-blue-500'> Log In</span>{' '}
          </p>
          <hr className='border-1 border-black w-full' />
          <p className='text-gray-900 text-center text-sm my-2'>
            By clicking on next, you acknowledge that you have read and accepted
            the Terms of Service and the Privacy Policy
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
