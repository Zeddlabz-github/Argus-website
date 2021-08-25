import React from 'react'
import {Link} from 'react-router-dom'

export default function AboutPageButtons() {
    return (
            <div className="w-full my-6">
                <div className="w-full flex flex-col md:flex-row">
                    <Link to="/organisationstructure" className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60">
                        <span className="text-red-1">01-</span> ORGANISATION STRUCTURE
                    </Link>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <Link to="/harassementpolicy" className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60">
                        <span className="text-red-1">02-</span> HARASSMENT POLICY
                    </Link>
                </div>
                <div className="w-full flex flex-col md:flex-row">
                    <Link to="/personell" className="text-left text-sm text-gray-2 font-bold w-11/12 lg:w-6/12 pl-4 m-4 py-8 bg-gray-200 hover:bg-red-1 hover:text-white hover:bg-opacity-60">
                        <span className="text-red-1">03-</span> PERSONELL
                    </Link>
                </div>
            </div>
    )
}
