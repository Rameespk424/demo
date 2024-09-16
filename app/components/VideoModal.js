'use client';
import { useState } from "react";
import { IoMdPlay } from "react-icons/io";
;

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        {/* Close Button */}
      
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-1 w-8 z-50 hover:bg-gray-300"
        >
          X
        </button>

        {/* YouTube Video */}
        <div className="relative pb-9/16 h-96 rounded-md">
        
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Change the URL to your video
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default function YouTubeModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Button to trigger modal */}
      <button
        className="bg-white text-black px-4 h-12 py-2 rounded-full hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
  <IoMdPlay />
      </button>

      {/* Modal Component */}
      <Modal show={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
