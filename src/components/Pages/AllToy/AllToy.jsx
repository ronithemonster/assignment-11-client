// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import CardAllToys from "./CardAllToys";

// const AllToy = () => {
//   const [searchText, setSearchText] = useState();
//   const allToys = useLoaderData();
//   console.log(allToys);

//   const handleSearch = () => {
//     fetch(`https://server-for-toy-mu.vercel.app/allToySearch${searchText}`)
//       .then((response) => response.json())
//       .then((data) => setSearchText(data))
//       .catch((error) =>{
//         console.log(error);
//       })
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-center mt-8">
//         <input
//           className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           type="text"
//           placeholder="Search..."
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button
//           onClick={handleSearch}
//           className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Search
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 ml-8 mt-10 mb-10 px-20">
//         {allToys.map((toys) => (
//           <CardAllToys key={toys._id} toys={toys} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllToy;

import React, { useEffect, useState } from "react";
import Test from "./Test";
import useTitle from "../../Hooks/titleHooks";
// import All_Toys_Cart from './All_Toys_Cart';

const All_Toys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle('AllToys')
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-for-toy-mu.vercel.app/allToys")
      .then((response) => response.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://server-for-toy-mu.vercel.app/allToySearch/${searchText}`)
      .then((response) => response.json())
      .then((data) => {
        setAllToys(data);

        console.log(data);
      });
  };

  return (
    <div className="mt-5">
      <div className="flex justify-center gap-6 mb-0">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
          className="input input-bordered"
        />

        <button
          className="btn btn-outline btn-secondary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto w-full my-container">
        <div className="justify-end flex flex-row mb-4 gap-3">
          <button className="btn btn-outline btn-sm btn-success">ascending</button>
          <button className="btn btn-outline btn-sm btn-secondary">descending</button>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture & Toy Name</th>
              <th> Seller Name </th>
              {/* <th> Toy Name</th> */}
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
              {/* <th><button className="btn btn-outline btn-sm btn-success">Success</button></th> */}
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <Test key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default All_Toys;
