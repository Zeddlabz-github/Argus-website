import React from "react";
import { Link } from "react-router-dom";

export default function TechPageButtons() {
  return (
    <div className="w-full my-6">
      <div className="w-full flex flex-col md:flex-row">
        <Link
          to="/incidentreporting"
          className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60"
        >
          <span className="text-red-1">01-</span> INCIDENT REPORTING
        </Link>
        <Link
          to="/tours&checkpoints"
          className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60"
        >
          <span className="text-red-1">02-</span> TOURS & CHECKPOINTS
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <Link
          to="/dispatch&tasks"
          className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60"
        >
          <span className="text-red-1">03-</span> DISPATCH & TASKS
        </Link>
        <Link
          to="/reports&data"
          className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60"
        >
          <span className="text-red-1">04-</span> REPORTS & DATA
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <Link
          to="/communication"
          className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60"
        >
          <span className="text-red-1">05-</span> COMMUNICATIONS
        </Link>
        <Link
          to="/mobilepatrols"
          className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60"
        >
          <span className="text-red-1">06-</span> MOBILE PATROLS
        </Link>
      </div>
    </div>
  );
}
