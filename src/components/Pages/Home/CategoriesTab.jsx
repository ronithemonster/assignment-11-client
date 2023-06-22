import React, { useEffect, useState } from 'react';
import ToyCard from '../AllToy/ToyCard';

const CategoriesTab = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("racing");

  useEffect(() => {
    fetch(`https://server-for-toy-mu.vercel.app/allToysByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName); }


  
  return (
    <div className='mt-20'>
    <h1 className="text-3xl font-extrabold text-center mb-12 mt-5">Pick By <span className=' text-red-300'>Sub-Category</span></h1>
    <div className=" text-center flex align-middle justify-center">
      <div className="text-center w-100 mx-auto">
        <div className="tabs ">
          <div
            onClick={() => handleTabClick("TRACTOR")}
            className={`tab  tab2 remote ${
              activeTab == "TRACTOR" ? "btn btn-warning active" : "btn btn-error"
            }`}
          >
          <button className=''>Tractor</button>
          </div>
          <div
            onClick={() => handleTabClick("racing")}
            className={`tab  tab2 Offline ${
              activeTab == "racing" ? " btn btn-warning" : "btn btn-error"
            }`}
          >
          Racing Car
          </div>
          <div
            onClick={() => handleTabClick("Dancing")}
            className={`tab  tab2 Offline ${
              activeTab == "Dancing" ? " btn btn-warning" : "btn btn-error"
            }`}
          >
          Music Car
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-3 my-container ">
      {toys?.map((toy) => (
        <ToyCard
        key={toy._id}
        toy={toy}></ToyCard>
      ))}
    </div>
  </div>
  );
};

export default CategoriesTab;