import React from "react";
import pic from '../../../assets/slidepic.jpg'

const DiscountBanner = () => {
  return (
    <div  data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"  className="mt-10 ">  <h2 className="text-3xl text-center "><span className="text-red-300  font-sans font-extrabold">Discount</span> Going on:</h2>
        <div className="flex my-container items-center bg-base-100  align-middle justify-center">
       
       <div className="">
       <div className="grid grid-flow-col gap-5  auto-cols-max">
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{"--value":15}}></span>
      </span>
      days
    </div> 
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{"--value":10}}></span>
      </span>
      hours
    </div> 
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{"--value":24}}></span>
      </span>
      min
    </div> 
    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{"--value":54}}></span>
      </span>
      sec
    </div>
  </div>
  <div>
      <div  className="mt-5">
      
          <h2 className="text-5xl font-extrabold font-serif mt-5  text-blue-gray-900">Hot deal this week</h2>
          <h5 className="text-2xl mt-3 font-bold  font-sans">New Collection Up to 50% OFF!!</h5>
  
          <div className="radial-progress bg-primary text-primary-content border-4 border-primary mt-3" style={{"--value":70}}>Racing</div>
          <div className="radial-progress bg-primary text-secondary-content border-4 border-secondary mt-3  ml-3" style={{"--value":70}}>Dancing</div>
          <div className="radial-progress bg-accent text-accent-content border-4 border-accent mt-3 ml-3" style={{"--value":70}}>Tractor</div>
      </div>
  </div>
  
       </div>
       <div >
          <img src={pic} alt="" />
       </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
