import React from 'react'
import { PiVanFill } from "react-icons/pi";
import { PiPhoneCallFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";

export default function Services() {
  return (
    <div className='mb-[100px] mt-[100px]'>
      <section className="body-font">
  <div className="container px-5 mx-auto">
    <div className="text-center mb-10">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-4 text-myBlackHead">
        Our Services
      </h1>
      <div className="flex mt-4 justify-center">
        <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* delievry div */}
      <div className="group p-4 md:w-1/3 flex flex-col text-center items-center mx-auto">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-myBlackHead mb-5 flex-shrink-0">
        <PiVanFill className="w-12 h-12"/>
        </div>
        <div className="flex-grow">
          <h2 className=" group-hover:text-myOrange duration-200 text-lg  title-font font-semibold text-myBlackHead mb-2">
            Free Delivery
          </h2>
          <p className="text-base line-clamp-2 text-myBlackPara">
           Free delivery on order above <span className='text-myBlackHead font-medium'>$1000</span>
          </p>
        </div>
      </div>
        {/* 24/7 services div */}
      <div className="group p-4 md:w-1/3 flex flex-col text-center items-center mx-auto">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-myBlackHead mb-5 flex-shrink-0">
        <PiPhoneCallFill className="w-12 h-12"/>

        </div>
        <div className="flex-grow">
          <h2 className=" group-hover:text-myOrange duration-200 text-lg  title-font font-semibold text-myBlackHead mb-2">
            Customer Service
          </h2>
          <p className="text-base line-clamp-2 text-myBlackPara">
           24/7 CUSTOMER SERVICE </p>
           <p className="text-base line-clamp-2 text-myBlackPara">For Queries & Questions feel free to contact</p>
        </div>
      </div>
        {/* money bank div */}
      <div className="group p-4 md:w-1/3 flex flex-col text-center items-center mx-auto">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-200 text-myBlackHead mb-5 flex-shrink-0">
        <GiReceiveMoney className="w-14 h-14"/>
        </div>
        <div className="flex-grow">
          <h2 className=" group-hover:text-myOrange duration-200 text-lg  title-font font-semibold text-myBlackHead mb-2">
            Money Back
          </h2>
          <p className="text-base line-clamp-2 text-myBlackPara">
           Get Money Back Gaurentee on Damage Products </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
