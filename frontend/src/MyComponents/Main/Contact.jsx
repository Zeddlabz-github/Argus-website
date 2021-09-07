import React, { Component } from "react";
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav";
import MobileHeader from "../Partials/MobileHeader";
import fleet from "./../../argus website/PNG/fleet linked in.png";
import CompanyContact from "./../Components/CompanyContact"

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      message: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.name} ${this.state.phone} ${this.state.message}`);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Header />
        <Header2 />
        <Stickynav />
        <MobileHeader />

        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-jobsbg">
          <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">
                CONTACT
              </h1>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-no-repeat bg-mapbg">
          <div className="container px-4 py-20 mx-auto sm:px-20 mb:px-26 lg:px-40 xl:px-48">
            <img src={fleet} alt="Security Cars" />
            <div className="flex flex-wrap my-12">
              <div className="p-2 md:w-1/4 flex flex-col items-start text-l font-medium text-gray-2">
                <div className="flex flex-col md:flex-row items-center w-full mb-4">
                  <span className="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
                  <h1 className="leading-tight text-4xl title-font font-bold text-gray-900 mb-2">
                    How can we help?
                  </h1>
                </div>
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">
                  We are experiencing longer than usual response times due to
                  Covid-19. We appreciate your patience and apologize in advance
                  for any delays in responding to your message.{" "}
                </p>
                <hr class="border-1 border-gray-600 w-11/12 my-3" />
                
                <CompanyContact />

              </div>
              <form
                className="bg-gray-200 p-6 w-3/4"
                onSubmit={this.handleSubmit}
              >
                <input
                  className="w-full mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
                  type="name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
                <input
                  className="w-full mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
                  type="telephone"
                  placeholder="Phone Number"
                  value={this.state.phone}
                  onChange={this.handlePhoneChange}
                />
                <textarea
                  className="w-full h-56 mb-3 py-5 px-4 focus:outline-none focus:ring-1 ring-red-1"
                  type="text"
                  placeholder="Write Message"
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                />
                <button className="w-full p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.38568994079!2d-79.71944568499285!3d43.681744458603305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f742bd5dfaf%3A0x4e85dd4aa00d79f1!2sArgus%20Security%20Services%20Corp.!5e0!3m2!1sen!2sin!4v1628009453160!5m2!1sen!2sin"
          className="w-full h-80 bg-gray-200"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
  }
}

export default Contact;
