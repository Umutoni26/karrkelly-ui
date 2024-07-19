import React from "react";
import './Infopage.css';
import computer from "../assets/computer.jpg";
import irembo from "../assets/irembo.jpg";
import printer from "../assets/printer.jpg";
import table from "../assets/table.jpg";

function Infopage() {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 text-center mb-8">Information Technology</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="p-4 border rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center text-center gap-5">
          <img src={printer} alt="Printing Service" className="w-full h-48 object-cover mb-4 md:w-1/2 md:mb-0 rounded-lg" />
          <div className="ml-20">
            <h3 className="text-3xl font-bold text-blue-500 mb-2">Printing Service</h3>
            <ul className="mb-4 ml-12 text-left">
              <li className="font-bold">Photo copies</li>
              <li className="font-bold">Photo Printing</li>
              <li className="font-bold">Business Card Printing</li>
              <li className="font-bold">Large Copies Printing</li>
              <li className="font-bold">Banner making</li>
              <li className="font-bold">Invitation card</li>
            </ul>
            <a href="https://example.com/printing-service" className="bg-blue-500 text-white py-2 px-4 rounded-md">Click here</a>
          </div>
        </div>

        <div className="p-4 border rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center text-center gap-5">
          <img src={computer} alt="Teaching Computer Service" className="w-full h-48 object-cover mb-4 md:w-1/2 md:mb-0 rounded-lg" />
          <div>
            <h3 className="text-3xl font-bold text-blue-500 mb-2">Teaching Computer Service</h3>
            <ul className="mb-4 pl-28 text-left">
              <li className="font-bold">Word, Excel, Power point</li>
              <li className="font-bold">Photo shop</li>
              <li className="font-bold">Computer Experience</li>
              <li className="font-bold">Writing Experience</li>
            </ul>
            <a href="https://example.com/teaching-computer-service" className="bg-blue-500 text-white py-2 px-4 rounded-md">Click here</a>
          </div>
        </div>

        <div className="p-4 border rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center text-center ">
          <img src={table} alt="School & Office Item Service" className="w-full h-48 object-cover mb-4 md:w-1/2 md:mb-0 rounded-lg" />
          <div >
            <h3 className="text-3xl font-bold text-blue-500 mb-2 ">School & Office Item Service</h3>
            <ul className="mb-4  ml-32 text-left">
              <li className="font-bold">Books, pen, pencils etc.</li>
              <li className="font-bold">Office files</li>
              <li className="font-bold">Rime of paper</li>
            </ul>
            <a href="https://example.com/school-office-item-service" className="bg-blue-500 text-white py-2 px-4 rounded-md">Click here</a>
          </div>
        </div>

        <div className="p-4 border rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center text-center ">
          <img src={irembo} alt="Online Service" className="w-full h-48 object-cover mb-4 md:w-1/2 md:mb-0 rounded-lg" />
          <div>
            <h3 className="text-3xl font-bold text-blue-500 mb-2 pr-16">Online Service</h3>
            <ul className="mb-4 pl-12 pr-20 text-left">
              <li className="font-bold">Irembo</li>
              <li className="font-bold">Land Declaration</li>
              <li className="font-bold">RRA Declaration</li>
              <li className="font-bold">Other online service</li>
            </ul>
            <a href="https://example.com/online-service" className="bg-blue-500 text-white py-2 px-4 rounded-md">Click here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infopage;
