import React, { Component } from "react";
import about_image from "./../../argus website/PNG/Video.png";
import { Link } from "react-router-dom";
import SideBar from "./../Components/SideBar.jsx";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav"
import MobileHeader from "../Partials/MobileHeader";

class About extends Component {
  render() {
    return (
      <div>

        <Header />
        <Header2 />
        <Stickynav/>
        <MobileHeader />

        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-servicesbg">
          <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white font-for-para">
                JOBS
              </h1>
            </div>
          </div>
        </div>

        <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="Jobs page" />
              <h2 className="leading-snug text-4xl title-font font-bold text-gray-900 mt-8 mb-8 font-for-para">
                Scope of Service
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Call or visit a Argus Career Centre today. There is no
                appointment required during regular business hours. We have a
                wide variety of available roles and jobsites
              </p>

              <ul className="text-gray-3 font-medium text-lg flex flex-col md:flex-row mb-8">
                <div className="">
                  <li>
                    <span className="text-red-1 font-bold">✓</span> Retail Malls
                  </li>
                  <li>
                    <span className="text-red-1 font-bold">✓</span> Commercial Properties{" "}
                  </li>
                  <li>
                    <span className="text-red-1 font-bold">✓</span> Condominiums{" "}
                  </li>
                </div>
                <div className="md:ml-10">
                  <li>
                    <span className="text-red-1 font-bold">✓</span> Industrial Sites
                  </li>
                  <li>
                    <span className="text-red-1 font-bold">✓</span> Healthcare Facilities
                  </li>
                  <li>
                    <span className="text-red-1 font-bold">✓</span> Mobile Guard{" "}
                  </li>
                </div>
              </ul>

              <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8 font-for-para">
                Employment Requirements
              </h2>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                Call or visit a Argus Career Centre today. There is no
                appointment required during regular business hours. We have a
                wide variety of available roles and jobsites
              </p>
              <ul className="text-gray-3 font-medium text-lg mb-8">
                <li>
                  <span className="text-red-1 font-bold">✓</span> A valid Ontario Security
                  Licence{" "}
                </li>
                <li>
                  <span className="text-red-1 font-bold">✓</span> Previous experience
                </li>
                <li>
                  <span className="text-red-1 font-bold">✓</span> Education (Ontario Grade
                  12 or equivalent)
                </li>
                <li>
                  <span className="text-red-1 font-bold">✓</span> Availability to work
                  required shifts{" "}
                </li>
                <li>
                  <span className="text-red-1 font-bold">✓</span> No criminal record
                </li>
                <li>
                  <span className="text-red-1 font-bold">✓</span> Canadian citizen or
                  landed immigrant status
                </li>
                <li>
                  <span className="text-red-1 font-bold">✓</span> Available transportation
                  to get to work{" "}
                </li>
                <li>
                  <span className="text-red-1 font-bold">✓</span> A clean and professional
                  appearance with good hygiene
                </li>
              </ul>
              <p className="leading-loose text-lg font-medium text-gray-2 mb-8">
                If you do not have a valid Ontario Security Licence, we can help
                you train and apply for one.
              </p>
              <button className="mx-auto py-6 px-8 rounded-lg text-3xl border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                APPLY NOW
              </button>
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
