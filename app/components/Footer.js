import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Clear the form fields
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <footer className="bg-[#002a3b] text-white">
      <div className="py-10 flex align-bottom gap-x-20">
        <div className="container flex align-bottom gap-x-20">
          <h5 className="text-lg">Quick Links</h5>
          <div className="flex align-middle gap-x-4 flex-wrap">
            <a href="#" className="text-white hover:text-gray-400">Home</a>
            <a href="#" className="text-white hover:text-gray-400">About Us</a>
            <a href="#" className="text-white hover:text-gray-400">Pricing</a>
            <a href="#" className="text-white hover:text-gray-400">Portfolios</a>
            <a href="#" className="text-white hover:text-gray-400">Insight</a>
          </div>
        </div>
      </div>

      <div className="border-y border-y-green-900 mb-4 mx-auto py-16">
      <div className='container'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Quick Links with Icons */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
           
              <span className="p-3 rounded-md text-white bg-[#083040] w-full lg:w-3/4 ">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="flex items-center gap-2">
            
              <span className="p-3 rounded-md text-white bg-[#083040] w-full lg:w-3/4 ">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="flex items-center gap-2">
             
              <span className="p-3 rounded-md text-white bg-[#083040] w-full lg:w-3/4 ">Lorem ipsum dolor sit amet</span>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-md text-white bg-[#083040]" // Apply background color
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-md text-white bg-[#083040]" // Apply background color
                required
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 rounded-md text-white bg-[#083040]" // New input field for the message with background color
                rows="4"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Column 3: Address and Follow Us Links */}
          <div className="flex flex-col gap-3 pl-10">
            <h4 className="text-lg font-medium mb-0">Contact Us</h4>
            <p className='font-sans'>
              Lorem Ipsum, Iso lorem, Iso Lorem Posum
            </p>
            <div className="flex items-center gap-2">
              <p>+91 00000 00000</p>
            </div>
            <div className="flex items-center gap-2">
              <p>info@demo.com</p>
            </div>

            <h6 className="mt-4">Follow us on</h6>
            <div className="flex gap-4 ">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#234159] rounded-md hover:bg-blue-700 transition"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#234159] rounded-md hover:bg-blue-400 transition"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#234159] rounded-md hover:bg-blue transition"
              >
                <FaLinkedin className="text-white" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#234159] rounded-md hover:bg-red-600 transition"
              >
                <FaYoutube className="text-white" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#234159] rounded-md  transition"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>



      </div>
      </div>

      <div className='container'>
        
      <div className='py-5'>
        <a href="#" className="text-white hover:text-gray-400">©2024 Demo. All rights reserved.</a>

        </div>
      </div>




    </footer>
  );
};

export default Footer;
