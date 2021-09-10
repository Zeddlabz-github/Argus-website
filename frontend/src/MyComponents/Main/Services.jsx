import React, { useState } from "react";
import image1 from "./../../argus website/PNG/raw-2_edited.png";
import { Link } from "react-router-dom";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";

const Services = () => {
  const [row1, setRow1] = useState(0);
  const [row2, setRow2] = useState(0);
  const [row3, setRow3] = useState(0);

  return (
    <div>
      <Header />
      <Header2 />
      <Stickynav />
      <MobileHeader />

      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg">
        <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white font-for-para">
              SERVICES
            </h1>
          </div>
        </div>
      </div>

      <div class="px-2 sm:px-40 lg:px-40 xl:px-48 bg-no-repeat bg-contain bg-mapbg2">
        <div class="container px-5 py-12 sm:py-16 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full items-center">
            <div className="flex flex-col md:flex-row items-center w-1/2 mb-4">
              <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
              <h1 className="leading-tight text-4xl font-bold text-gray-3 ">
                First hand information to our operations
              </h1>
            </div>
            <p class="lg:pl-6 lg:w-1/2 mx-auto leading-loose text-lg font-medium text-gray-2">
              As a client you will gain first hand access to day-today
              operations and daily occurrence reposts.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap text-center mb-8">
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow1(1)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white" onClick={() => setRow1(2) }>
                    Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white" onClick={() => setRow1(3)}>
                    Read More
                </button>
              </div>
            </div>
          </div>

          <div className={row1 == 1 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
              <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow1(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 1
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={row1 == 2 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow1(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 2
              </h2> 
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={row1 == 3 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow1(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 3
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow2(1)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white" onClick={() => setRow2(2)}>
                    Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white" onClick={() => setRow2(3)}>
                    Read More
                </button>
              </div>
            </div>
          </div>

          <div className={row2 == 1 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow2(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 4
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={row2 == 2 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow2(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 5
              </h2> 
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={row2 == 3 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow2(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 6
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button
                  className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white"
                  onClick={() => setRow3(1)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white" onClick={() => setRow3(2)}>
                    Read More
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center transform hover:scale-110 duration-300"
                src={image1}
                alt="blog"
              />
              <div className="bg-white border-6 hover:bg-gray-200 duration-500">
                <h1 className="title-font text-lg font-medium text-white p-3 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
                <button className="w-full p-4 text-black bg-gray-200 hover:bg-red-1 hover:text-white" onClick={() => setRow3(3)}>
                    Read More
                </button>
              </div>
            </div>
          </div>

          <div className={row3 == 1 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow3(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 7
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={row3 == 2 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow3(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 8
              </h2> 
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={row3 == 3 ? "block" : "hidden"}>
            <div className="px-8 py-6 rounded-lg border border-gray-2 mb-12">
            <button className="px-4 py-1 float-right bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200" onClick={() => setRow3(0)}>Close</button>
              <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                EVENT SECURITY SERVICES 9
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <p className="leading-relaxed. text-l font-medium text-gray-2 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
