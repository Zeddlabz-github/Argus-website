import React, { useState } from "react";
import logo from "../../../../argus website/PNG/Logo Vectors.png";
import { Link, useHistory } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {
  aunthenticate,
  signin,
  isAuthenticated,
} from "../../../../helpers/auth";

const LoginForAdmin = () => {
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
    loading: false,
    didRedirect: false,
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

  //const { user, token } = isAuthenticated();

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, loading: true });
    signin({ email, password })
      .then((data) => {
        console.log(data);
        aunthenticate(data, () => {
          setData({ ...data, didRedirect: true });
        });
        setData({
          ...data,
          email: "",
          password: "",
        });
        history.push("/dashboard/admin/home");
      })
      .catch((err) => console.log(err));

    //console.log(token, '----> FROM LOCAL STORAGE');
  };
  return (
    <div className="block fixed top-0 z-100 overflow-hidden">
      <div className="p-32 w-screen h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-cover bg-no-repeat bg-hero">
        <div className="content text-3xl text-center md:text-left lg:w-2/3">
          <h1 className="leading-snug text-gray-3 text-5xl font-for-para font-bold">
            This is the <br />
            Admin Login
          </h1>
        </div>
        <div className="w-1/3 mx-auto flex flex-col items-center">
          <form
            className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center"
            onSubmit={handleSubmit}
          >
            <img src={logo} alt="Logo" className="w-20 mb-3" />

            <h1 className="text-black text-2xl mt-1 mb-3">Admin Login</h1>

            <input
              className="w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className="w-full mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button
              className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForAdmin;
