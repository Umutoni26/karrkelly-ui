// import React from 'react'
// import moreinfo from '../assets/moreinfo.png'
// import School from '../assets/School.png'
// import food from '../assets/food.png'
// import realestate from '../assets/realestate.png'
// import Mkelia from '../assets/Mkelia.png'
// import Pkelia from '../assets/Pkelia.png'

// const Aboutus = () => {
//   return (
//     <div>
//       <section id="aboutus" className="mx-24" >
//       <h1 className="text-center text-blue-700 font-bold underline text-3xl my-16">About Us</h1>
//           <div className="container mt-7  flex flex-row ">
          
//             <div className="left">
//             <h1 className="text-blue-700 font-semibold  ">Get to Know Us </h1>
//             <hr className="border-2 border-blue-700 w-16" />
//               <div className="bg-blue-600 rounded-r-3xl  py-3 px-9 mt-7">
//                  <p className="text-white text-sm text-center">“ Welcome to karkelly company ltd, <br />
//                     Karkelly company we provide high-quality ,<br /> beautifully <br />
//                     Designed stationery that inspires creativity and <br /> brings joy to your everyday life ”
//                  </p>
//               </div>

//               <div className="bg-blue-600 p-3 rounded-r-2xl w-fit mt-5 flex">
//                 <h3 className="text-white text-xs">Our vision&mission</h3>
//                 <a className="text-white  text-xs mx-6" href="">More info</a>
//               </div>

//               <div className="border-2 border-blue-700 w-48 my-8 px-4 py-4 rounded-r-full drop-shadow-2xl ">
//                 <h2 className="flex">Meet our team  <img className="w-6 h-5  " src={moreinfo} alt="" /></h2>
//                 <hr className="border-2 border-blue-700 w-11" />
//               </div>
//             </div>
//             <div className="right ml-72 mt-9 relative z-10 ">
//               <img className="w-64 h-40 ml-44 absolute top-12" src={School} alt="" />
//               <img className="w-64 h-46 ml-44  " src={food} alt="" />
//               <img className="w-64 h-40 ml-44 absolute  " src={realestate} alt="" />
//             </div>

            
//           </div>
//           <div className="bg-gray-200 mt-12 pb-8">
//             <h1 className="text-center text-blue-700 text-1xl font-semibold mt-12 pt-9">EXPERT PEOPLE</h1>
//             <div className="justify-center flex flex-row gap-20 mt-16">
//                <div >
//                 <img className="w-48 h-48 pb-6 hover:h-48 hover:w-48" src={Pkelia} alt="" />
//                 <h2  className="text-blue-700 font-semibold text-center">NDAYISHIMIYE JASON</h2>
//                 <p className="text-blue-700 text-center">CIO Founder</p>
//                </div>
//                <div >
//                 <img className="w-48 h-48 pb-6 hover:h-48 hover:w-48" src={Mkelia} alt="" />
//                 <h2 className="text-blue-700 font-semibold text-center">MUSENGIMANA ANYSIA </h2>
//                 <p className="text-blue-700 text-center">Assistant CO Founder</p>
//                </div>
//             </div>
//           </div>
//       </section>
//     </div>
//   )
// }

// export default Aboutus

import React from 'react';
import moreinfo from '../assets/moreinfo.png';
import School from '../assets/School.png';
import food from '../assets/food.png';
import realestate from '../assets/realestate.png';
import Mkelia from '../assets/Mkelia.png';
import Pkelia from '../assets/Pkelia.png';

const Aboutus = () => {
  return (
    <div>
      <section id="aboutus" className="px-4 sm:px-8 lg:px-24">
        <h1 className="text-center text-blue-950 font-bold underline text-3xl my-16">About Us</h1>
        <div className="container mt-7 flex flex-col lg:flex-row lg:gap-16">
          <div className="left flex-1">
            <h1 className="text-blue-950 font-semibold">Get to Know Us</h1>
            <hr className="border-2 border-blue-950 w-16" />
            <div className="bg-blue-950 rounded-r-3xl py-3 px-9 mt-7">
              <p className="text-white text-sm text-center">
                “ Welcome to Karkelly Company Ltd, <br />
                Karkelly Company we provide high-quality, <br />
                beautifully designed stationery that inspires creativity and <br />
                brings joy to your everyday life ”
              </p>
            </div>
            <div className="bg-blue-950 p-3 rounded-r-2xl w-fit mt-5 flex items-center justify-between">
              <h3 className="text-white text-xs">Our vision & mission</h3>
              <a className="text-white text-xs mx-6" href="#">More info</a>
            </div>
            <div className="border-2 border-blue-950 w-48 my-8 px-4 py-4 rounded-r-full drop-shadow-2xl">
              <h2 className="flex items-center">
                Meet our team <img className="w-6 h-5 ml-2" src={moreinfo} alt="More info" />
              </h2>
              <hr className="border-2 border-blue-950 w-11 mt-1" />
            </div>
          </div>
          <div className="right flex-1 relative mt-9 lg:ml-24 z-10">
            <div className="flex flex-wrap justify-center m-0 lg:justify-start ">
              <img className="w-64 h-40 mb-4 lg:mb-0 lg:ml-12 lg:absolute lg:top-12" src={School} alt="School" />
              <img className="w-64 h-46 mb-4 lg:mb-0 lg:ml-12" src={food} alt="Food" />
              <img className="w-64 h-40 lg:ml-12 lg:absolute lg:top-48" src={realestate} alt="Real estate" />
            </div>
          </div>
        </div>
        <div className="bg-gray-200 mt-12 pb-8">
          <h1 className="text-center text-blue-950 text-xl font-semibold mt-12 pt-9">EXPERT PEOPLE</h1>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mt-16">
            <div className="flex flex-col items-center">
              <img className="w-48 h-48 mb-6 hover:scale-105 transition-transform duration-300" src={Pkelia} alt="NDAYISHIMIYE JASON" />
              <h2 className="text-blue-950 font-semibold text-center">NDAYISHIMIYE JASON</h2>
              <p className="text-blue-950 text-center">CIO Founder</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-48 h-48 mb-6 hover:scale-105 transition-transform duration-300" src={Mkelia} alt="MUSENGIMANA ANYSIA" />
              <h2 className="text-blue-950 font-semibold text-center">MUSENGIMANA ANYSIA</h2>
              <p className="text-blue-950 text-center">Assistant CO Founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
