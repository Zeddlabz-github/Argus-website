import React, { Component } from "react";
import about_image from "./../../argus website/PNG/Video.png";
import { Link } from "react-router-dom";
import SideBar from "./../Components/SideBar.jsx";

class About extends Component {
  render() {
    return (
      <div>
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
          <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">
                JOBS
              </h1>
            </div>
          </div>
        </div>

        <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="About page Image" />
              <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                Scope of Service
              </h2>
              <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">
                Call or visit a Argus Career Centre today. There is no
                appointment required during regular business hours. We have a
                wide variety of available roles and jobsites
              </p>

              <ul className="text-gray-3 font-bold text-l flex flex-col sm:flex-row mb-8">
                <div className="mx-5">
                  <li>
                    <span className="text-red-1">✓</span> Retail Malls
                  </li>
                  <li>
                    <span className="text-red-1">✓</span> Commercial Properties{" "}
                  </li>
                  <li>
                    <span className="text-red-1">✓</span> Condominiums{" "}
                  </li>
                </div>
                <div className="mx-5">
                  <li>
                    <span className="text-red-1">✓</span> Industrial Sites
                  </li>
                  <li>
                    <span className="text-red-1">✓</span> Healthcare Facilities
                  </li>
                  <li>
                    <span className="text-red-1">✓</span> Mobile Guard{" "}
                  </li>
                </div>
              </ul>

              <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">
                Employment Requirements
              </h2>
              <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">
                Call or visit a Argus Career Centre today. There is no
                appointment required during regular business hours. We have a
                wide variety of available roles and jobsites
              </p>
              <ul className="text-gray-3 font-bold text-l mb-8">
                <li>
                  <span className="text-red-1">✓</span> A valid Ontario Security
                  Licence{" "}
                </li>
                <li>
                  <span className="text-red-1">✓</span> Previous experience
                </li>
                <li>
                  <span className="text-red-1">✓</span> Education (Ontario Grade
                  12 or equivalent)
                </li>
                <li>
                  <span className="text-red-1">✓</span> Availability to work
                  required shifts{" "}
                </li>
                <li>
                  <span className="text-red-1">✓</span> No criminal record
                </li>
                <li>
                  <span className="text-red-1">✓</span> Canadian citizen or
                  landed immigrant status
                </li>
                <li>
                  <span className="text-red-1">✓</span> Available transportation
                  to get to work{" "}
                </li>
                <li>
                  <span className="text-red-1">✓</span> A clean and professional
                  appearance with good hygiene
                </li>
              </ul>
              <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">
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
