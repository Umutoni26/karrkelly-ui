import React from 'react';
import WhatsApp from '../assets/WhatsApp.png';
import TwitterX from '../assets/TwitterX.png';
import Instagram from '../assets/Instagram.png';
import Facebook from '../assets/Facebook.png';

const Footer = () => {
  return (
    <div className="bg-blue-950 p-3 rounded-tl-3xl rounded-tr-3xl">
      <div className="mx-9 my-3">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-row mx-4 gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" src={WhatsApp} alt="WhatsApp" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" src={TwitterX} alt="TwitterX" />
            </a>
          </div>

          <ul className="text-white flex flex-col md:flex-row text-sm md:text-base lg:text-lg mx-5 gap-2 md:gap-5 lg:gap-9">
            <li>Home</li>
            <li>Service</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

          <div className="text-white flex flex-col md:flex-row items-center md:items-start">
            <footer className="mt-3 text-xs md:text-sm lg:text-base">
              <p>&copy;2024 KarKelly. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
