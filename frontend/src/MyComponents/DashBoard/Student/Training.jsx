import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from './Components/SideNav'
import ProfileBar from './Components/ProfileBar'

export default function Training() {
    return (
        <div className="w-full flex flew-col md:flex-row">
            <div className="w-2/12 bg-red-1">
                
                <SideNav />
            
            </div>
            <div className="w-full md:w-10/12 bg-gray-1 flex flex-col-reverse md:flex-row">
                <div className="w-8/12 h-screen">

                </div>

                <div className="w-full md:w-4/12 bg-white">
                    <ProfileBar />
                </div>
                
            </div>
        </div>
    )
}
