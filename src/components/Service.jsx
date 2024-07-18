import React from 'react';
import foodS from '../assets/foodS.jpg';
import construction from '../assets/construction.png';
import Itpic from '../assets/Itpic.png';

const Service = () => {
  return (
    <div>
      <section id="service" className="my-9">
        <h1 className="text-center text-blue-950 font-bold underline text-3xl mb-8">Our Service</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
          <div className="p-6 border-blue-950 border-4 rounded-2xl hover:bg-blue-50 hover:text-blue-950 transform transition-transform">
            <img className="w-full h-40 object-cover transition duration-300 ease-in-out transform hover:scale-105" src={Itpic} alt="Information Technology" />
            <h2 className="text-center font-semibold mt-5">Information Technology</h2>
            <p className="text-center text-xs">Computer service and printing <br /> activities</p>
            <div className="flex justify-center mt-5">
              <button className="bg-blue-950 text-white text-xs p-2 rounded-lg hover:bg-white hover:text-blue-950 transition-colors">Click here</button>
            </div>
          </div>
          <div className="p-6 border-blue-950 border-4 rounded-2xl hover:bg-blue-50 hover:text-blue-950 transform transition-transform">
            <img className="w-full h-40 object-cover transition duration-300 ease-in-out transform hover:scale-105" src={construction} alt="Civil Engineering Projects" />
            <h2 className="text-center font-semibold mt-5">Civil Engineering Projects</h2>
            <p className="text-center text-xs">Master plan and land <br /> survey</p>
            <div className="flex justify-center mt-5">
              <button className="bg-blue-950 text-white text-xs p-2 rounded-lg hover:bg-white hover:text-blue-950 transition-colors">Click here</button>
            </div>
          </div>
          <div className="p-6 border-blue-950 border-4 rounded-2xl hover:bg-blue-50 hover:text-blue-950 transform transition-transform">
            <img className="w-52 h-40 object-cover rounded-3xl transition duration-300 ease-in-out transform hover:scale-105" src={foodS} alt="Food Supply" />
            <h2 className="text-center font-semibold mt-5">Food Supply</h2>
            <p className="text-center text-xs">Wedding and other <br /> ceremony</p>
            <div className="flex justify-center mt-5">
              <button className="bg-blue-950 text-white text-xs p-2 rounded-lg hover:bg-white hover:text-blue-950 shadow-2xl transition-all">Click here</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
