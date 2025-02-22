import React from "react";
import ContactImg from "../../Assets/images/contactImg.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function ContactLe() {
  return (
    <div className="flex flex-col gap-8 justify-center w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-lg">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={ContactImg}
        alt="Contact"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Dias Madyshev</h3>
        <p className="text-lg font-normal text-gray-400">FRONTEND Developer</p>
        <p className="text-lg font-normal text-gray-400">
          I am a Frontend Developer specializing in creating responsive and
          user-friendly web applications.
        </p>
        <p className="text-lg font-normal text-gray-400">
          Phone: <span className="text-lightText">+77086567847</span>
        </p>
        <p className="text-lg font-normal text-gray-400">
          Email: <span className="text-lightText">diasmadisev@gmail.com</span>
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">FIND ME IN</h2>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
