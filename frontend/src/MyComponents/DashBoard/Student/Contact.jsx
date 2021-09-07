import { Link } from 'react-router-dom'
import SideNav from './Components/SideNav'
import ProfileBar from './Components/ProfileBar'
import TopElement from './Components/TopElement'

export default function Contact() {
    return (
        <div className="w-full flex flew-col md:flex-row">
            <div className="w-2/12 bg-red-1">
                
                <SideNav />
            
            </div>
            <div className="w-full md:w-10/12 flex flex-col-reverse md:flex-row">
                <div className="w-full md:w-8/12 bg-gray-1 ">
                    <TopElement />
                    <div className="text-center w-full">
                        <h1 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8 mx-auto">Contact Us</h1>
                        <div className="flex flex-col md:flex-row px-2 md:px-8">
                            <div className="w-11/12 md:w-6/12 text-left bg-white shadow-xl rounded-xl p-8 m-3 text-gray-2">
                                <a href="tel:6472891070" class="px-2">
                                    {/* <img src={phone_logo} alt="Phone Logo" /> */}
                                    <p>647-289-1070</p>
                                </a>
                                <a href="mailto:info@argussecurityservices.ca" class="px-2">
                                    {/* <img src={phone_logo} alt="Phone Logo" /> */}
                                    <p >info@argussecurityservices.ca</p>
                                </a>
                                {/* <img src={phone_logo} alt="Phone Logo" /> */}
                                <p>350 Rutherford Road South Brampton ON L6W-4N6 Suite 210 Plaza 2</p>
                            </div>
                            <form className="bg-white shadow-xl rounded-xl p-4 w-11/12 md:w-6/12 m-3 mb-6" >
                                <input className="w-full mb-3 py-5 px-4 border-b border-black focus:outline-none focus:ring-1 ring-red-1" type="name" placeholder="Your Name" />
                                <input className="w-full mb-3 py-5 px-4 border-b border-black focus:outline-none focus:ring-1 ring-red-1" type="telephone" placeholder="Phone Number"/>
                                <textarea className="w-full h-56 mb-3 py-5 px-4 border-b border-black focus:outline-none focus:ring-1 ring-red-1" type="text" placeholder="Write Message"/>
                                <button className="w-2/3 p-4 border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-4/12 bg-white">
                    <ProfileBar />
                </div>
                
            </div>
        </div>
    )
}
