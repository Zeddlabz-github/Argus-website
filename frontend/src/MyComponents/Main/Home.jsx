import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import section4_img1 from "./../../argus website/PNG/Video1.png";
import section4_img2 from "./../../argus website/PNG/3.Charlie.png";
import quotes from "./../../argus website/PNG/qoutes.PNG";
import signature from "./../../argus website/SVG/01.svg";
import section6 from "./../../argus website/PNG/sdm.png";
import section4img from "./../../argus website/PNG/raw-2_edited.png";
import section5 from "./../../argus website/PNG/0000000.png";
import image1 from "./../../argus website/PNG/raw-2_edited.png";
import empofmonth from "./../../argus website/PNG/8. Sud.png";
import testimonial from "./../../argus website/PNG/IMG_0118.png";
import sponsor1 from "./../../argus website/PNG/6. Sponsor 1.png";
import sponsor2 from "./../../argus website/PNG/7. Sponsor 2.png";
import camera from "./../../argus website/SVG/3. camera.svg";
import medal from "./../../argus website/SVG/3. Medal.svg";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";

export default function Home() {
  return (
    <div>
      <Header />
      <Header2 />
      <Stickynav />
      <MobileHeader />

      {/* Section 1 */}
      <div className="bg-cover bg-center bg-no-repeat bg-hero">
        <p className="py-24 sm:py-72"></p>
      </div>

      {/* Section 2 CAll Us */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 mx-auto sm:-mt-36 z-0">
        <div className="flex flex-col sm:flex-row sm:items-end mx-auto">
          <h1 className="flex-grow sm:pr-16 text-4xl font-bold font-for-para text-gray-400">
            Call Us <br />
            <span className="text-red-1 text-4xl sm:text-6xl font-bold">
              647.289.1070
            </span>
          </h1>
          <button className="flex-shrink-0 font-bold text-white bg-red-1 py-5 px-4 md:px-12 focus:outline-none hover:bg-white border-2 border-red-1 hover:text-red-1 shadow-lg rounded-lg text-sm mt-10 sm:mt-0">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Section 3  Accountable */}
      <div className="text-gray-600 font-for-para overflow-hidden">
        <div className="flex flex-col sm:flex-row px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 pt-4 pb-2 mt-8 text-white justify-center">
          <div className="bg-red-1 w-full sm:w-6/12 px-3 py-5 flex flex-row items-center justify-center">
            <FontAwesomeIcon
              icon="search"
              className="w-12 h-12 text-white p-1 mr-10"
            />
            <div>
              <p>100% Accountable</p>
              <h1 className="font-bold">Know the Truth for Peace of Mind</h1>
            </div>
          </div>
          <div className="bg-gray-3 w-full sm:w-6/12 px-3 py-5 flex flex-row items-center justify-center">
            <div className="w-2/12 ">
            <FontAwesomeIcon
              icon="search"
              className="w-16 h-16 text-white"
            />
            </div>
            <div className="w-10/12">
              <p>100% Accountable</p>
              <h1 className="font-bold">Direct Updates Regarding Incidents</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 Introducing Argus Security */}
      <div>
        <div className="px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 py-24 bg-contain bg-no-repeat bg-mapbg2 font-for-para">
          <div className="flex flex-wrap items-center">
            <div className="items-end w-full md:w-1/2 flex flex-col lg:pr-12">
              <img
                src={section4_img1}
                alt="Argus Security Services"
                className="pb-8 border-b-8 border-red-1"
              />
              <img
                src={section4_img2}
                alt="Argus Security Services"
                className="bg-white w-8/12 pt-4 pl-4 -mt-36 md:-md-40 lg:-mt-48 xl:-mt-72"
              />
            </div>
            <div className="md:pl-3 w-full md:w-1/2 flex flex-col items-start">
              <div className="flex flex-col md:flex-row items-center w-full mb-4">
                <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
                <h1 className="leading-tight text-4xl font-bold text-gray-3 mb-4">
                  Introducing Argus Security Services
                </h1>
              </div>
              <p className="leading-loose text-l text-gray-2 mb-8">
                Argus Security ensures the team adherence to company rules and
                regulations. Our goal is to make our clients the direct
                beneficiaries of our policies and procedures.{" "}
              </p>
              <ul className="text-black font-bold text-l flex flex-col md:flex-row mb-2">
                <div>
                  <li className="py-1">
                    <span className="text-red-1 font-bold">✓</span> Optimized
                    Mobile Patrols
                  </li>
                  <li className="py-1">
                    <span className="text-red-1 font-bold">✓</span> Fool Proof
                    Checkpoints
                  </li>
                  <li className="py-1">
                    <span className="text-red-1 font-bold">✓</span> GPS Tracking
                  </li>
                </div>
                <div className="md:ml-12">
                  <li className="py-1">
                    <span className="text-red-1 font-bold">✓</span> Reliable
                    Fire Watch
                  </li>
                  <li className="py-1">
                    <span className="text-red-1 font-bold">✓</span> Tangible
                    Proof of Service
                  </li>
                  <li className="py-1">
                    <span className="text-red-1 font-bold">✓</span> Efficient
                    Dispatching System
                  </li>
                </div>
              </ul>
              <div>
                <div className="px-2 py-2 mx-auto">
                  <div className="w-full text-left">
                    <img
                      src={quotes}
                      alt=""
                      className="w-12 inline-block text-red-1 ml-4 mb-2"
                    />
                    <p className="leading-relaxed text-xl font-medium text-gray-2 bg-gray-200 px-12 py-8 shadow-lg mb-8">
                      Success is not result of the amount of time we put in,
                      instead its the quality of time we put in.
                    </p>
                    <div className="py-6 flex items-center ">
                      <img
                        src={section4img}
                        className="w-20 h-20 p-1 border-2 border-red-1"
                        alt=""
                      />
                      <div className="ml-8">
                        <img src={signature} alt="" className="w-60" />
                        <p className="text-gray-3 font-bold">
                          CEO & CO FOUNDER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={camera} alt="" className="w-40 h-40 ml-auto -mt-40" />
      </div>

      {/* Section 5 Services */}
      <div className="bg-gray-200 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 pt-24 pb-12 font-for-para">
        <div className="flex flex-wrap">
          <div className="flex flex-wrap w-full items-baseline">
            <div className="w-full flex flex-col md:flex-row items-center pb-5">
              <div className="flex flex-col md:flex-row items-center pr-24">
                <span className="h-1 w-10 bg-red-1 mb-10 md:m-0 md:mr-4"></span>
                <h1 className="leading-tight text-4xl font-bold text-gray-3 pb-10 md:pb-0 ">
                  Firsthand information to our operations
                </h1>
              </div>
              <p className="leading-loose text-l text-gray-2 pb-10 md:pb-0 ">
                As a client you will gain first hand access to day-today
                operations and daily occurrence reposts.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between text-center mb-8 ">
          <div className="p-8 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image1}
                alt="blog"
              />
              <div className=" bg-white">
                <h1 className="title-font text-lg font-medium text-white p-4 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
              </div>
              <Link to="/contact">
                <button className="w-full p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="p-8 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image1}
                alt="blog"
              />
              <div className=" bg-white">
                <h1 className="title-font text-lg font-medium text-white p-4 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
              </div>
              <Link to="/contact">
                <button className="w-full p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="p-8 md:w-1/3">
            <div className="h-full overflow-hidden ">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image1}
                alt="blog"
              />
              <div className=" bg-white">
                <h1 className="title-font text-lg font-medium text-white p-4 mb-3 bg-center bg-no-repeat bg-shape1">
                  GATED COMMUNITY
                </h1>
                <p className="leading-loose text-gray-2 px-6 py-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
              </div>
              <Link to="/contact">
                <button className="w-full p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto flex items-center py-3">
          <img src={section5} className="w-24 h-24" alt="" />
          <div className="-mt-20 -ml-6">
            <svg
              className="w-14 h-14 bg-white rounded-xl"
              xmlns="http://www.w3.org/2000/svg"
              width="85.04"
              height="85.003"
              viewBox="0 0 85.04 85.003"
            >
              <g
                id="Phone_logo"
                data-name="Phone logo"
                transform="translate(-36.779 -122.722)"
              >
                <g
                  id="Group_7"
                  data-name="Group 7"
                  transform="translate(36.779 122.722)"
                >
                  <path
                    id="Path_220"
                    data-name="Path 220"
                    d="M79.314,207.685c-9.468,0-18.936-.114-28.4.039A14.16,14.16,0,0,1,36.9,196.274a9.917,9.917,0,0,1-.072-1.8c0-19.279.081-38.557-.051-57.835a14,14,0,0,1,10.785-13.589,12.738,12.738,0,0,1,2.8-.316q28.778-.027,57.553-.012a13.774,13.774,0,0,1,13.6,11.835,25.224,25.224,0,0,1,.283,3.559q.027,27.564.012,55.131a14.357,14.357,0,0,1-11.7,14.357,8.32,8.32,0,0,1-1.646.075Q93.888,207.691,79.314,207.685ZM83,180.3c-.566-.361-1.185-.683-1.724-1.107A60.382,60.382,0,0,1,67.9,164.642c-1.1-1.685-.969-2.452.6-3.643,1.224-.927,2.44-1.871,3.664-2.8a1.574,1.574,0,0,0,.379-2.365,27.928,27.928,0,0,0-3.054-4.206,85.954,85.954,0,0,0-6.559-5.858,2.692,2.692,0,0,0-3.8.274c-3.761,3.634-5.355,8.042-4.242,13.207,2.184,10.163,7.1,18.683,15.545,24.956A37.953,37.953,0,0,0,92.9,192.191c3.288.054,7.287-2.72,8.267-5.6a3.33,3.33,0,0,0-.223-2.635,30.807,30.807,0,0,0-9.465-8.319,2.876,2.876,0,0,0-3.5.2C86.338,177.218,84.78,178.695,83,180.3Zm-4.134-37.973c2.323.3,4.407.445,6.441.848,7.867,1.552,13.24,6.2,16.384,13.5,2.5,5.794,3.18,11.932,3.264,18.159.018,1.282.692,1.938,1.781,1.91a1.6,1.6,0,0,0,1.643-1.892c-.129-2.034-.2-4.074-.3-6.11a38.941,38.941,0,0,0-3.075-13.406c-2.99-7.07-7.964-12.16-15.358-14.666a31.836,31.836,0,0,0-13.92-1.489c-1.965.22-3.923.539-5.861.939a1.577,1.577,0,0,0-1.258,1.925,1.476,1.476,0,0,0,1.622,1.4,9.98,9.98,0,0,0,1.342-.081C74.076,143.017,76.573,142.653,78.871,142.325Zm.4,8.273c-.563,0-1.462-.009-2.365.006a2.7,2.7,0,0,0-.575.15c-1.643.412-2.262,1.107-1.995,2.232.241,1.011,1.393,1.465,2.84,1.249A13.993,13.993,0,0,1,80.436,154a11.8,11.8,0,0,1,8.505,4.037c2.975,3.607,4.158,7.93,4.609,12.488a1.874,1.874,0,0,0,1.862,1.916,1.66,1.66,0,0,0,1.607-2.172,64.193,64.193,0,0,0-1.934-8.514C92.668,154.783,87.087,150.253,79.271,150.6Z"
                    transform="translate(-36.779 -122.722)"
                    fill="#ba0913"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="mx-auto px-4 py-4">
            <h2 className="leading-loose text-l font-medium text-gray-2">
              24 HOURS SERVICE AVAILABLE
            </h2>
            <p className="text-l title-font font-bold text-gray-900">
              Have any questions? Feel free to contact our office today at{" "}
              <span className="text-red-1">647.289.1070</span>
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 Know you partners */}
      <div className="text-white body-font overflow-hidden px-4 sm:px-8 md:px-16 lg:pl-16 lg:pr-24 xl:pl-28 xl:pr-40 pt-20 bg-cover bg-knowbg font-for-para">
        <div className="px-5 py-12 mx-auto">
          <div className="flex flex-col-reverse md:flex-row -m-12 items-end ">
            <div className="w-10/12 md:w-7/12 mx-auto">
              <img src={section6} alt="Argus Security" />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col items-start">
              <h1 className="text-4xl font-bold w-full lg:w-11/12 mb-12 px-4 lg:px-0 leading-tight">
                Know your
                <br />
                Partners-in-Protection
              </h1>
              <div className="flex items-center">
                <button className="px-8 py-4 text-sm font-bold bg-red-1 border border-black bg-opacity-30 mx-2 hover:bg-opacity-100">
                  OUR TEAM
                </button>
                <button className="px-8 py-4 text-sm font-bold bg-red-1 border border-black bg-opacity-30 mx-2 hover:bg-opacity-100">
                  ARGUS HIERARCHY
                </button>
                <button className="px-8 py-4 text-sm font-bold bg-red-1 border border-black bg-opacity-30 mx-2 hover:bg-opacity-100">
                  CONTACT US
                </button>
              </div>
              <p className="leading-loose text-l p-6 mb-2">
                At Argus Security Services we maintain a prominent level of
                training for our guards in response to our highly sensitive
                sites. We offer 24/7 fast and reliable security services.
                Qualifications of our Directors are as follows:
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                <div>
                  <img
                    src={section4img}
                    className="w-44 lg:w-28 xl:w-40 ml-4"
                    alt=""
                  />
                </div>
                <div>
                  <ul className="px-4 text-sm font-bold">
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Member of
                      Law society of Ontario
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Police
                      Foundation Certified
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> 7 Years of
                      Security Experience
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Sometimes
                      buys me Coffee
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Good Taste
                      in Movies
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Good Guy
                      Though{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <img src={signature} alt="" className="w-96 md:-ml-72" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 Covid 19 CTA */}
      <div className="bg-red-1 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 py-20 flex flex-col sm:flex-row items-end font-for-para">
        <h1 className="flex-grow sm:pr-28 text-4xl font-bold text-white leading-tight">
          Covid 19 Procedures and much more to safeguard your business.
        </h1>
        <button className="flex-shrink-0 font-bold text-red-1 bg-white py-5 px-12 focus:outline-none hover:bg-red-1 border-2 border-white hover:text-white shadow-lg rounded-lg text-l mt-10 sm:mt-0">
          DISCOVER MORE
        </button>
      </div>

      {/* Section 8 Client Testimonial */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-24 bg-gray-1 font-for-para">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center mb-24">
          <span className="h-1 w-10 bg-red-1 mb-10 md:m-0 md:mr-4"></span>
          <h1 className="text-4xl font-bold text-gray-3 ">
            Client Testimonials
          </h1>
        </div>
        <div className="flex flex-wrap mb-16">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 shadow-lg">
              <img
                src={quotes}
                alt=""
                className="w-12 inline-block text-red-1 mb-4"
              />
              <p className="leading-loose mb-6">
                Argus helped me find my child in a crowded mall. I would be
                eternally thankful.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial}
                  className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-red-1">
                    Tanbir Singh
                  </span>
                  <span className="text-black text-sm">The Sidhu Estates</span>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-white p-8 shadow-lg">
              <img
                src={quotes}
                alt=""
                className="w-12 inline-block text-red-1 mb-4"
              />
              <p className="leading-loose mb-6">
                Argus helped me find my child in a crowded mall. I would be
                eternally thankful.
              </p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src={testimonial}
                  className="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-red-1">
                    Tanbir Singh
                  </span>
                  <span className="text-black text-sm">The Sidhu Estates</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 9 Employee of the Month */}
      <div>
        <img src={medal} alt="" className="w-52 h-52 mr-auto -mb-52" />
        <div className="px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 py-16 bg-cover bg-no-repeat bg-empofmon font-for-para">
          <div className="flex flex-wrap items-center">
            <div className="md:px-12 w-full md:w-1/2 flex flex-col items-start">
              <div className="flex flex-col md:flex-row items-center w-full mb-4">
                <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
                <h1 className="leading-tight text-4xl font-bold text-gray-3 mb-4">
                  Employee of the <br />
                  Month
                </h1>
              </div>
              <p className="leading-loose text-l text-gray-2 mb-8">
                <span className="text-red-1">Ramanjeet Singh Sran </span>
                embodies the core values of Argus and has repeatedly gone above
                and beyond the call of duty to provide reliable customer
                service.
              </p>
              <ul className="text-gray-3 font-bold text-l">
                <li className="py-1">
                  <span className="text-red-1">✓</span> Driven
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> Hard Working
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> Reliable
                </li>
              </ul>
              <div>
                <div className="px-2 py-2 mx-auto">
                  <div className="w-full text-left">
                    <img
                      src={quotes}
                      alt=""
                      className="w-12 inline-block text-red-1 ml-4 mb-2"
                    />
                    <p className="leading-normal text-xl font-medium text-gray-2 bg-gray-200 px-12 py-6 shadow-lg mb-8">
                      Success is not result of the amount of time we put in,
                      instead its the quality of time we put in.
                    </p>
                    <div className="pt-6 flex items-center ">
                      <img
                        src={section4img}
                        className="w-20 h-20 p-1 border-2 border-red-1"
                        alt=""
                      />
                      <div className="ml-8">
                        <img src={signature} alt="" className="w-60" />
                        <p className="text-gray-3 font-bold">AREA MANAGER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-end w-full md:w-1/2 lg:pl-12">
              <img
                src={empofmonth}
                alt="Argus Security Services"
                className="w-10/12"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 10 Sponsors */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-12 mx-auto bg-gray-1">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center mb-4">
          <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
          <h1 className="leading-tight text-4xl font-bold text-gray-3 mb-4">
            Clients
          </h1>
        </div>
        <div className="flex flex-wrap mx-auto items-center justify-around">
          <img src={sponsor2} alt="" className="w-72 " />
          <img src={sponsor1} alt="" className="w-40 " />
          <img src={sponsor1} alt="" className="w-40 " />
        </div>
      </div>
    </div>
  );
}
