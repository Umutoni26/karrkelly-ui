

// import React from 'react'
// import Email1 from '../assets/Email1.png'
// import location from '../assets/location.png'
// import Phone1 from '../assets/Phone1.png'
// import Clock1 from '../assets/Clock1.png'

// const Contactus = () => {
//   return (
//     <div>
//       <section id="contactus"> 
//         <h1 className="text-center text-blue-700 font-bold underline text-3xl my-16">Contact Us</h1>
//         <div className="flex justify-center gap-16 bg-gray-100 py-9 mx-24 rounded-3xl shadow-lg">
          
//           <div className="bg-blue-600 rounded-r-3xl p-7 rounded-l-md">
//             <h1 className="text-white text-center font-bold mb-4 text-2xl ">Get in touch</h1>
//             <div className="flex flex-row"><img className="w-9 h-8 mx-6 mb-6" src={Email1} alt="" />  <p className="text-white">Karkellycompany@gmail.com</p></div>
//             <div className="flex flex-row"><img className="w-9 h-8  mx-6 mb-6" src={location} alt=""/> <p className="text-white">Kigali,Gasabo-Kabuga</p></div>
//             <div className="flex flex-row"><img className="w-9 h-8  mx-6 mb-6 " src={Phone1} alt=""/>   <p className="text-white">0788881283</p></div>
//             <div className="flex flex-row"><img className="w-9 h-8  mx-6 mb-6" src={Clock1} alt="" />  <p className="text-white">07:00-20:00</p></div>
//           </div>

//           <div>
//             <h1 className="text-center text-blue-600 font-extrabold pb-9">Leave us a message</h1>
//             <form action="" className="space-y-6">
//               <div className="flex flex-col">
//                 <label htmlFor="full-name" className="text-blue-700 mb-2">Full Names</label>
//                 <input type="text" id="full-name" className="border-b-2 border-blue-700 bg-transparent" />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="email" className="text-blue-700 mb-2">Email</label>
//                 <input type="email" id="email" className="border-b-2 border-blue-700 bg-transparent" />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="message" className="text-blue-700 mb-2">Message</label>
//                 <textarea id="message" className="border-b-2 border-blue-700 bg-transparent"></textarea>
//               </div>
//               <div className="flex justify-center">
//                 <button type="submit" className="bg-blue-600 hover:bg-blue-500 w-64 text-white px-11 py-2 rounded">Send</button>
//               </div>
//             </form>
//           </div>
          
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Contactus


import React from 'react';
import Email1 from '../assets/Email1.png';
import location from '../assets/location.png';
import Phone1 from '../assets/Phone1.png';
import Clock1 from '../assets/Clock1.png';

const Contactus = () => {
  return (
    <div>
      <section id="contactus" className="px-4 sm:px-8 lg:px-24 my-9">
        <h1 className="text-center text-blue-700 font-bold underline text-3xl my-16">Contact Us</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 bg-gray-100 py-9 mx-4 sm:mx-8 lg:mx-24 rounded-3xl shadow-lg">
          
          <div className="bg-blue-600 rounded-r-3xl p-7 rounded-l-md flex-1">
            <h1 className="text-white text-center font-bold mb-4 text-2xl">Get in touch</h1>
            <div className="flex items-center mb-6">
              <img className="w-9 h-8 mr-4" src={Email1} alt="Email" />
              <p className="text-white">Karkellycompany@gmail.com</p>
            </div>
            <div className="flex items-center mb-6">
              <img className="w-9 h-8 mr-4" src={location} alt="Location" />
              <p className="text-white">Kigali, Gasabo-Kabuga</p>
            </div>
            <div className="flex items-center mb-6">
              <img className="w-9 h-8 mr-4" src={Phone1} alt="Phone" />
              <p className="text-white">0788881283</p>
            </div>
            <div className="flex items-center mb-6">
              <img className="w-9 h-8 mr-4" src={Clock1} alt="Clock" />
              <p className="text-white">07:00-20:00</p>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-center text-blue-600 font-extrabold pb-9">Leave us a message</h1>
            <form action="" className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="full-name" className="text-blue-700 mb-2">Full Names</label>
                <input type="text" id="full-name" className="border-b-2 border-blue-700 bg-transparent px-2 py-1" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-blue-700 mb-2">Email</label>
                <input type="email" id="email" className="border-b-2 border-blue-700 bg-transparent px-2 py-1" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-blue-700 mb-2">Message</label>
                <textarea id="message" className="border-b-2 border-blue-700 bg-transparent px-2 py-1"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 w-64 text-white px-11 py-2 rounded">Send</button>
              </div>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Contactus;
