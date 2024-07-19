import React from 'react';
import LazyBackground from '../components/LazyBackground';

const Hero = () => {
  const backgroundImage = "/printer.jpg"; // Define your background image URL

  return (
    <LazyBackground
      src={backgroundImage}
      className="w-full h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})`, /* Your additional styles */ }}
    >
      <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-xl md:text-5xl font-extrabold shadow-2xl">Welcome to KarKelly ltd</h1>
          <p className="mt-4 text-xs md:text-lg">
            We offer the best services in IT, Food Supply, and Construction. <br />
            "Karkelly Bright Future ahead"
          </p>
        </div>
      </div>
    </LazyBackground>
  );
};

export default Hero;
