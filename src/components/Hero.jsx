// import React from 'react';
// import Student from '../assets/Student.png';
// import engineer from '../assets/engineer.png';
// import supplier from '../assets/supplier.png';

// const Hero = () => {
//   return (
//     <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center relative ">
//       {/* <div className="flex flex-col">
//         <h1 className="text-gray-500 font-extrabold text-[70px]">KarKelly</h1>
//         <p className="text-center text-blue-700 text-2xl font-bold">"Bright Future A head"</p>
//       </div> */}
//       <div className=" bg-black backdrop-brightness-75 p-5 absolute bottom-0 right-0 py-9  bg-opacity-55">
//         <div className="flex flex-col">
//           <div className="bg-blue-600 mb-8 flex rounded-lg p-2 bg-opacity-40">
//             <h2 className="text-white font-semibold">School/Office <br /> items</h2>
//             <img className="w-32 h-32" src={Student} alt="" />
//           </div>
//           <div className="bg-yellow-500 mb-8 flex rounded-lg p-2 bg-opacity-50">
//             <h2 className="text-white font-semibold">Civil Engineering <br /> Service</h2>
//             <img className="w-32 h-28" src={engineer} alt="" />
//           </div>
//           <div className="bg-blue-600 mb-3 flex rounded-lg p-2 bg-opacity-40">
//             <h2 className="text-white font-semibold text-center">Food Production <br /> Service</h2>
//             <img className="w-32 h-28" src={supplier} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import Student from '../assets/Student.png';
import engineer from '../assets/engineer.png';
import supplier from '../assets/supplier.png';

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center relative ">
      <div className="flex">
        <h1 className="text-white bg-blue-600 py-2 px-4 rounded-full my-6 hover:bg-blue-700 bg-opacity-50">Explore more</h1>
      </div>
      <div className="bg-black backdrop-brightness-75 p-5 absolute bottom-0 right-0 py-9 bg-opacity-55 hidden sm:block">
        <div className="flex flex-col">
          <div className="bg-blue-600 mb-8 flex rounded-lg p-2 bg-opacity-40">
            <h2 className="text-white font-semibold">School/Office <br /> items</h2>
            <img className="w-32 h-32" src={Student} alt="Student" />
          </div>
          <div className="bg-yellow-500 mb-8 flex rounded-lg p-2 bg-opacity-50">
            <h2 className="text-white font-semibold">Civil Engineering <br /> Service</h2>
            <img className="w-32 h-28" src={engineer} alt="Engineer" />
          </div>
          <div className="bg-blue-600 mb-3 flex rounded-lg p-2 bg-opacity-40">
            <h2 className="text-white font-semibold text-center">Food Production <br /> Service</h2>
            <img className="w-32 h-28" src={supplier} alt="Supplier" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
