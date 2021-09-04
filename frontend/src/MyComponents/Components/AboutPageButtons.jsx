import React from 'react'
import {Link} from 'react-router-dom'

export default function AboutPageButtons() {
    return (
            <div className="w-full my-6">
                <div className="w-full flex flex-col md:flex-row justify-start p-1 my-4 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
                    <Link to="/organisationstructure" className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200">
                        <span className="text-red-1 font-bold">1.</span> ORGANISATION STRUCTURE
                    </Link>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-start p-1 my-8 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
                    <Link to="/harassementpolicy" className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200">
                        <span className="text-red-1 font-bold">2.</span> HARASSMENT POLICY
                    </Link>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-start p-1 my-4 bg-gray-200 border shadow-lg rounded-lg hover:bg-white hover:shadow-none hover:border-gray-200">
                    <Link to="/personell" className="text-left text-xl text-gray-2 w-full pl-6 py-6 border border-gray-200">
                        <span className="text-red-1 font-bold">3.</span> PERSONELL
                    </Link>
                </div>
            </div>
    )
}
