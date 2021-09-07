import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./Components/SideNav";
import ProfileBar from "./Components/ProfileBar";
import TopElement from "./Components/TopElement";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import Progress from "./Components/Progress";

export default function Home() {
  return (
    <div className="w-full flex flew-col md:flex-row">
      <div className="w-2/12 bg-red-1">
        <SideNav />
      </div>
      <div className="w-full md:w-10/12 bg-gray-1 flex flex-col-reverse md:flex-row">
        <div className="w-8/12">
          <TopElement />
          <div className="flex flex-col md:flex-row">
            <div className="w-6/12 px-4">
                <Form1 />
                <Form2 />
                <Form3 />
            </div>
            <div className="w-6/12">
                <Progress />
                <Progress />
                <Progress />
            </div>
            </div>
        </div>

        <div className="w-full md:w-4/12 bg-white">
          <ProfileBar />
        </div>
      </div>
    </div>
  );
}
