import React, { useState } from "react";
import CountUp from "react-countup";
import { TbTruckDelivery } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { FaCarCrash } from "react-icons/fa";
import ScrollTrigger from "react-scroll-trigger";

const Service = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div    className="mb-8">
        <h2 className="text-red-400 text-center text-3xl mb-8 font-extrabold">Services</h2>
        <div className="flex gap-6 justify-center items-center">
          <div  className="bg-red-100 px-10 py-3 rounded-md" >
            <div className=" text-center"  >
              <FaCarCrash className="text-5xl " />
            </div>
            <div>Total Toys</div>
            {countOn && (
              <CountUp
                className="text-5xl  font-extrabold "
                end={1200}
                duration={2}
              />
            )}
          </div>
          <div className="bg-red-100 px-6 py-3 rounded-md" >
            <div  >
              <TbTruckDelivery className="text-5xl" />
            </div>
            <div>World Wide Delivery</div>
            {countOn && (
              <CountUp
                className="text-5xl  font-extrabold "
                end={8000}
                duration={2}
              />
            )}
          </div>
          <div className="bg-red-100 px-8 py-3 rounded-md" >
            <div  >
              <BsPeople className="text-5xl" />
            </div>
            <div>Happy Customer</div>
            {countOn && (
              <CountUp
                className="text-5xl  font-extrabold "
                end={7000}
                duration={2}
              />
            )}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Service;
