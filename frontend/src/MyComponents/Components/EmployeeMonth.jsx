import React, { useState, useEffect } from "react";
import { getEmployeeMonth } from "../../helpers/EmployeeMonth";
import Imagehelper from "../../helpers/ImageHelper";
import quotes from "./../../argus website/PNG/quotes.PNG";
import medal from "./../../argus website/SVG/Medal.svg";

const EmployeeMonth = () => {
  const [emp, setEmployeeMonth] = useState({
    id: "",
    empImage: "",
    instructorImage: "",
    instructorSign: "",
    skills: "",
    empName: "",
    empDesc: "",
    description: "",
    instructorName: "",
    instructorRole: "",
  });

  useEffect(() => {
    getEmployeeMonth().then((data) => {
      setEmployeeMonth({
        id: data?._id,
        empImage: data?.empImage,
        instructorImage: data?.instructorImage,
        instructorSign: data?.instructorSign,
        skills: data?.skills,
        empName: data?.empName,
        empDesc: data?.empDesc,
        description: data?.description,
        instructorName: data?.instructorName,
        instructorRole: data?.instructorRole,
      });
    });
  }, []);

  return (
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
              <span className="text-red-1">{emp?.empName}</span>
              {emp.empDesc}
            </p>
            {/* <ul className="text-gray-3 font-bold text-l">
                <li className="py-1">
                  <span className="text-red-1">✓</span> {emp?.skills[0]}
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> {emp?.skills[1]}
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> {emp?.skills[2]}
                </li>
              </ul> */}
            <div>
              <div className="px-2 py-2 mx-auto">
                <div className="w-full text-left">
                  <img
                    src={quotes}
                    alt=""
                    className="w-12 inline-block text-red-1 ml-4 -mb-4"
                  />
                  <p className="leading-normal text-xl font-medium text-gray-2 bg-gray-200 px-12 py-6 shadow-lg mb-8">
                    {emp.description}
                  </p>
                  <div className="pt-6 flex items-center ">
                    <div className="w-20 h-20 p-1 border-2 border-red-1">
                      <Imagehelper
                        param="eom"
                        id={`instructorImage-${emp.id}`}
                      />
                    </div>
                    <div className="ml-8">
                      <div className="w-60">
                        <Imagehelper
                          param="eom"
                          id={`instructorSign-${emp.id}`}
                        />
                      </div>
                      <p className="text-gray-3 font-bold">
                        {emp.instructorRole}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-end w-full md:w-1/2 lg:pl-12">
            <div className="">
              <Imagehelper param="eom" id={`empImage-${emp.id}`} className="w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeMonth;
