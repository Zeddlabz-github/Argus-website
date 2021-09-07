import React, { useState } from "react";
import logo from "./../../argus website/PNG/Logo Vectors.png";
import { Link , useHistory} from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { aunthenticate, signin, isAuthenticated } from "../../helpers/auth";

const LogIn = ({ open }) => {
  
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
        history.push("/dashboard/student/home");
      })
      .catch((err) => console.log(err));

    //console.log(token, '----> FROM LOCAL STORAGE');
  };
  return (
    <div class={open ? "block fixed top-0 z-100 overflow-hidden" : "hidden"}>
      <div className="p-32 w-screen h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-black bg-opacity-80">
        <div className="w-full p-4 md:p-16 lg:p-40 bg-cover bg-no-repeat bg-white rounded-3xl flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="content text-3xl text-center md:text-left lg:w-2/3">
          </div>
          <div className="w-1/3 mx-auto flex flex-col items-center">
            <form
              className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center"
              onSubmit={handleSubmit}
            >
              <img src={logo} alt="Logo" className="w-20 mb-3" />

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
              <p className="text-gray-900 font-bold text-center my-2">
                Not yet Registered ?
                <Link to="/signup">
                  <span className="text-blue-500"> Register</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
