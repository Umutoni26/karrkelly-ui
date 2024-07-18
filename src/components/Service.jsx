


import React from 'react';
import foodS from '../assets/foodS.jpg';
import construction from '../assets/construction.png';
import Itpic from '../assets/Itpic.png';

const Service = () => {
  return (
    <div>
      <section id="service" className="my-9">
        <h1 className="text-center text-blue-700 font-bold underline text-3xl mb-8">Our Service</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
          <div className="p-6 border-blue-700 border-4 rounded-2xl hover:bg-blue-500 hover:text-white">
            <img className="w-full h-40 object-cover" src={Itpic} alt="Information Technology" />
            <h2 className="text-center font-semibold mt-5">Information Technology</h2>
            <p className="text-center text-xs">Computer service and printing <br /> activities</p>
            <div className="flex justify-center mt-5">
              <button className="bg-blue-700 text-white text-xs p-2 rounded-lg hover:bg-white hover:text-blue-700">Click here</button>
            </div>
          </div>
          <div className="p-6 border-blue-700 border-4 rounded-2xl hover:bg-blue-500 hover:text-white">
            <img className="w-full h-40 object-cover" src={construction} alt="Civil Engineering Projects" />
            <h2 className="text-center font-semibold mt-5">Civil Engineering Projects</h2>
            <p className="text-center text-xs">Master plan and land <br /> survey</p>
            <div className="flex justify-center mt-5">
              <button className="bg-blue-700 text-white text-xs p-2 rounded-lg hover:bg-white hover:text-blue-700">Click here</button>
            </div>
          </div>
          <div className="p-6 border-blue-700 border-4 rounded-2xl hover:bg-blue-500 hover:text-white">
            <img className="w-52 h-40 object-cover rounded-3xl" src={foodS} alt="Food Supply" />
            <h2 className="text-center font-semibold mt-5">Food Supply</h2>
            <p className="text-center text-xs">Wedding and other <br /> ceremony</p>
            <div className="flex justify-center mt-5">
              <button className="bg-blue-700 text-white text-xs p-2 rounded-lg hover:bg-white hover:text-blue-700 shadow-2xl">Click here</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
