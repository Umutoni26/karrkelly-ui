import React from 'react'
import WhatsApp from '../assets/WhatsApp.png'
import TwitterX from '../assets/TwitterX.png'
import Instagram from '../assets/Instagram.png'
import Facebook from '../assets/Facebook.png'

const Footer = () => {
  return (
    <div className="bg-blue-600 p-3 rounded-tl-3xl rounded-tr-3xl">
      <div className="mx-9 my-3">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-row mx-4 gap-4">
              <img className="w-11 h-11" src={Facebook} alt="" />
              <img className="w-11 h-11" src={Instagram} alt="" />
              <img className="w-11 h-11" src={WhatsApp} alt="" />
              <img className="w-11 h-11" src={TwitterX} alt="" />
            </div>

            <ul className="text-white flex flex-row mx-5 gap-9">
              <li>Home</li>
              <li>Service</li>
              <li>Product</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>

            <div className="text-white flex flex-row">
              <footer className="mt-3">
                <p>&copy;2024 KarKelly. All rights reserved.</p>
              </footer>
            </div>

            
          </div>
      </div>
    </div>
  )
}

export default Footer
