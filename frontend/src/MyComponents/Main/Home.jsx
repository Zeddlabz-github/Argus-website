import React from "react";
import { Link } from "react-router-dom";
import section_img1 from "./../../argus website/PNG/Video1.png";
import section_img2 from "./../../argus website/PNG/sdm.png";
import section3img from "./../../argus website/PNG/Group -5.png";
import section4img from "./../../argus website/PNG/raw-2_edited.png";
import image1 from "./../../argus website/PNG/raw-2_edited.png";

export default function Home() {
  return (
    <div>
      <div class="text-gray-600 body-font bg-cover bg-no-repeat bg-center bg-hero">
        <div class="container mx-auto justify-center items-center">
          <div class=" items-center text-center">
            <p class="py-24 sm:py-60"></p>
          </div>
        </div>
      </div>
      <div class="container px-2 mx-auto sm:-mt-20">
        <div class="lg:w-9/12 flex flex-col sm:flex-row sm:items-center mx-auto">
          <h1 class="flex-grow sm:pr-16 sm:text-4xl font-bold title-font text-gray-2">
            Call us <br />
            <span class="text-red-1 sm:text-6xl font-bold">647.289.1070</span>
          </h1>
          <button class="flex-shrink-0 font-bold text-white text-sm bg-red-1 border-0 py-5 px-10 focus:outline-none hover:bg-white border-2 border-red-1 hover:text-red-1 rounded-lg text-sm mt-10 sm:mt-0">
            DISCOVER MORE
          </button>
        </div>
      </div>

      <div class="text-gray-600 body-font overflow-hidden">
        <div class="flex flex-wrap px-8 py-4 mt-8 text-white justify-center">
          <div class="bg-red-1 px-16 py-5">
            <div>
              <p>100% Accountable</p>
            </div>
            <h1 class="font-bold">Know the Truth for Peace of Mind</h1>
          </div>
          <div class="bg-gray-700 px-16 py-5">
            <div>
              <p>100% Accountable</p>
            </div>
            <h1 class="font-bold">Direct Updates Regarding Incidents</h1>
          </div>
        </div>
        <div class="container px-4 py-8 mx-auto sm:px-20 mb:px-1 lg:px-40 bg-contain bg-no-repeat bg-mapbg">
          <div class="flex flex-wrap items-start">
            <div class="items-end md:w-1/2 flex flex-col items-start ">
              <img src={section_img1} alt="Argus Security Services" />
              <img
                src={section_img2}
                alt="Argus Security Services"
                class="bg-red-1 w-7/12 border-t-8 border-l-8 -mt-44"
              />
            </div>
            <div class="px-4 md:w-1/2 flex flex-col items-start">
              <div class="flex flex-col sm:flex-row items-center w-full">
                <span class="h-1 w-10 rounded bg-red-1 m-4 "></span>
                <h1 class="text-4xl title-font font-bold text-gray-900 mt-4 mb-4 lg:w-10/12">
                  Introducing Argus Security Services
                </h1>
              </div>
              <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">
                Argus Security ensures the team adherence to company rules and
                regulations. Our goal is to make our clients the direct
                beneficiaries of our policies and procedures.{" "}
              </p>
              <ul class="text-gray-3 font-bold text-l flex flex-col sm:flex-row mb-8">
                <div className="mx-5">
                  <li>
                    <span className="text-red-1">✓</span> Optimized Mobile
                    Patrols
                  </li>
                  <li>
                    <span className="text-red-1">✓</span> Fool Proof Checkpoints{" "}
                  </li>
                  <li>
                    <span className="text-red-1">✓</span> GPS Tracking{" "}
                  </li>
                </div>
                <div className="mx-5">
                  <li>
                    <span className="text-red-1">✓</span> Reliable Fire Watch
                  </li>
                  <li>
                    <span className="text-red-1">✓</span> Tangible Proof of
                    Service
                  </li>
                  <li>
                    <span className="text-red-1">✓</span> Efficient Dispatching
                    System{" "}
                  </li>
                </div>
              </ul>
              <div>
                <div class="container px-2 py-2 mx-auto">
                  <div class="w-full text-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="inline-block w-8 h-8 text-red-1 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed text-l font-medium text-gray-3 bg-gray-200 p-3 rounded-lg shadow-lg">
                      Success is not result of the amount of time we put in,
                      instead its the quality of time we put in.
                    </p>
                    <div class="py-6 flex items-center">
                      <img
                        src={section4img}
                        class="w-20 h-20 p-1 border border-red-1"
                        alt=""
                      />
                      <div class="mx-auto">
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                          Name Here
                        </h2>
                        <p class="text-gray-500">CEO & CO FOUNDER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-200">
        <div class="container px-4 py-8 mx-auto sm:px-20 mb:px-1 lg:px-40 flex flex-wrap">
          <div class="flex flex-wrap w-full items-center">
            <div class="flex flex-wrap items-center w-1/2">
              <hr class="border-4 border-red-1 w-6/12 lg:w-1/12 mb-2 lg:m-4" />
              <h1 class="text-4xl font-medium lg:w-10/12 lg:mb-0 mb-4">
                First hand information to our operations
              </h1>
            </div>
            <p class="lg:pl-6 lg:w-1/2 mx-auto leading-relaxed text-gray-2 font-bold">
              As a client you will gain first hand access to day-today
              operations and daily occurrence reposts.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap text-center mb-8 px-4 py-8 mx-auto sm:px-20 mb:px-1 lg:px-40 ">
          <div class="p-8 md:w-1/3">
            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden hover:border-red-1">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image1}
                alt="blog"
              />
              <div class=" bg-white">
                <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">
                  GATED COMMUNITY
                </h1>
                <p class="leading-relaxed mb-3 text-gray-2 p-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
              </div>
              <Link to="/contact">
                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div class="p-8 md:w-1/3">
            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden hover:border-red-1">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image1}
                alt="blog"
              />
              <div class=" bg-white">
                <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">
                  CONSTRUCTION
                </h1>
                <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">
                  Site surveillance, road flaggers, risk assessment, loss
                  prevention and mobile patrols at your construction site.
                </p>
              </div>
              <Link to="/contact">
                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div class="p-8 md:w-1/3">
            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden hover:border-red-1">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image1}
                alt="blog"
              />
              <div class=" bg-white">
                <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">
                  PARKING
                </h1>
                <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">
                  Fire Route watch, valid permit enforcement and deterrent
                  against invalid/improper parking to ensure smoothness.
                </p>
              </div>
              <Link to="/contact">
                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="w-1/2 mx-auto pb-10 flex">
          <img src={section4img} class="w-20 h-20" alt="" />
          <svg
            class="w-12 -mr-10"
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
          <div class="mx-auto py-4">
            <h2 class="leading-relaxed text-l font-medium text-gray-2">
              24 HOURS SERVICE AVAILABLE
            </h2>
            <p class="text-l title-font font-bold text-gray-900">
              Have any questions? Feel free to contact our office today at{" "}
              <span class="text-red-1">647.289.1070</span>
            </p>
          </div>
        </div>
      </div>

      <div class="text-white body-font overflow-hidden px-4 pt-12 sm:px-20 mb:px-1 lg:px-40 bg-cover bg-knowbg">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-12 items-end ">
            <div class="w-6/12 mx-auto">
              <img src={section_img2} alt="Argus Security" />
            </div>
            <div class="md:w-1/2 p-4 flex flex-col items-start">
              <h2 class="text-4xl font-medium lg:w-10/12 lg:mb-0 mb-4">
                Know your
                <br />
                Partners-in-Protection
              </h2>
              <div class="flex items-center p-4">
                <button class="px-6 py-2 bg-red-1 mx-2">Our Team</button>
                <button class="px-6 py-2 bg-red-1 mx-2">Argus Hierarchy</button>
                <button class="px-6 py-2 bg-red-1 mx-2">Contact Us</button>
              </div>
              <p class="leading-relaxed p-2 mb-8">
                At Argus Security Services we maintain a prominent level of
                training for our guards in response to our highly sensitive
                sites. We offer 24/7 fast and reliable security services.
                Qualifications of our Directors are as follows:
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                <div>
                  <img src={section4img} class="w-32 ml-4" alt="" />
                </div>
                <div>
                  <ul class="p-4">
                    <li>
                      <span className="text-red-1">✓</span> Member of Law
                      society of Ontario
                    </li>
                    <li>
                      <span className="text-red-1">✓</span> Police Foundation
                      Certified
                    </li>
                    <li>
                      <span className="text-red-1">✓</span> 7 Years of Security
                      Experience{" "}
                    </li>
                    <li>
                      <span className="text-red-1">✓</span> Sometimes buys me
                      Coffee
                    </li>
                    <li>
                      <span className="text-red-1">✓</span> Good Taste in Movies
                    </li>
                    <li>
                      <span className="text-red-1">✓</span> Good Guy Though{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-gray-600 body-font bg-red-1">
        <div class="container px-5 py-20 mx-auto">
          <div class="lg:w-10/12 flex flex-col sm:flex-row sm:items-center items-center mx-auto">
            <h1 class="flex-grow sm:pr-16 text-5xl font-medium title-font text-white">
              Covid 19 Procedures and much more to safeguard your business.
            </h1>
            <button class="flex-shrink-0 font-bold text-red-1 bg-white border-0 py-5 px-10 focus:outline-none hover:bg-red-1 border-2 border-white hover:text-white rounded-lg text-sm mt-10 sm:mt-0">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
