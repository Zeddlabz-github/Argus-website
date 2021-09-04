import React, { Component } from 'react'
import about_image from './../../../argus website/PNG/Video.png'
import { Link } from 'react-router-dom'
import TechPageButtons from './../../Components/TechPageButtons.jsx'
import SideBar from './../../Components/SideBar.jsx'
import Header from "./../../Partials/Header";
import Header2 from "./../../Partials/Header2";
import Stickynav from "./../../Partials/Stickynav"
import MobileHeader from "./../../Partials/MobileHeader";

class DispatchTasks extends Component {
    
    render() {
        return (
            <div>

                <Header />
                <Header2 />
                <Stickynav/>
                <MobileHeader />

                <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
                    <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold font-for-para text-white">DISPATCH & TASKS</h1>
                        </div>
                    </div>
                </div>

                <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 xl:px-48 bg-no-repeat bg-mapbg">
                <div className="flex flex-wrap my-12">
                    <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                        <img src={about_image} alt="About page Image"/>
                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Dispatch Overview</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">This feature provides Team Argus everything they need to easily dispatch tasks out
                            to the field and simplify communication between guards in the field, dispatch, and
                            supervisors from one convenient location. Silvertrac’s centralized dispatch and
                            task management makes it easy to manage teams better, solve issues faster, and
                            do what’s best for clients with amazing features like:</p>

                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Intuitive dashboards</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Pass down notes from shift to shift or post to post </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Live GPS maps </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Scheduling for tasks and guard tours </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Automation of sending recurring tasks and reminders </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Messaging within the Silvertrac mobile app for guards</li>
                        </ul>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Dispatching One-Off Tasks</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Dispatching one-off tasks has never been simpler. Assign tasks directly from the
                            issue monitor in three easy steps:</p>

                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Select “New Action” to pick any property in the system</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Add “New Issue Type” and include any additional notes </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Assign the new task to a specific guard or the first available officer </li>
                        </ul>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Simple Task Assignment for Guards</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">Once assigned, guards complete a process that is just as easy as dispatching tasks:</p>

                        <ul className="text-lg mb-8">
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> The guard assigned is instantly notified on their device with a description of the task and where to complete it.</li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> They can handle the task right away and include pictures, notes or audio files for reports. </li>
                            <li className="text-gray-3"><span className="font-bold text-red-1">✓</span> Once complete, the guard submits the task back to the dispatcher and updates </li>
                        </ul>

                        <h2 className="leading-tight text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Simplified Field Operations Management</h2>
                        <p className="leading-loose text-lg font-medium text-gray-2 mb-8">The Issue Monitor makes managing field operations easy. Every issue is colorcoded based on its status. Quickly filter for relevant issues, access live GPS
                            updates, and keep a finger on the pulse of any issue, at any property. The issue
                            monitor will show when guards receive a task, when they confirm it, and when they
                            solve it. Every task is added to all relevant reports - including incident reports, Daily
                            Activity Reports, and summary reports so clients receive them quickly and
                            accurately</p>

                        <TechPageButtons />

                        <div>
                            
                        </div>                   
                    
                    </div>
                    <SideBar />
                </div>
            </div>

            </div>
        )
    }
}

export default DispatchTasks
