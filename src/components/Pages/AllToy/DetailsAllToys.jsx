import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

const DetailsAllToys = () => {
  const data = useLoaderData();
  const {
    _id,
    description,
    picture_url,
    available_quantity,
    rating,
    price,
    seller_name,
    name,
    seller_email,
  } = data;
  return (
    <div className=" flex  bg-base-100 shadow-xl my-container">
      <div>
        <figure className="rounded-md">
          <img
            style={{ width: "1500px", height: "500px" }}
            className="rounded-md "
            src={picture_url}
            alt="Movie"
          />
        </figure>
      </div>
      <div className=" pl-8">
        <div className="  position-absolute bottom-0 end-50 mb-3">
          <Rating
            readonly
            className="text-success"
            placeholderRating={rating} 
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar> </FaStar>}
            fullSymbol={<FaStar> </FaStar>}
          />
        </div>
        <p className="text-5xl font-bold mt-3 mb-3 ">{name}</p>
        <p className="text-4xl mb-4 font-thin">{price}</p>
        <div className="flex text-center mb-4 items-center align-middle">
          <div>
            <select className="select select-success w-32 select-sm">
              <option disabled selected>
                Color
              </option>
              <option>Red</option>
              <option>Green</option>
              <option>Blue</option>
            </select>
          </div>
          <div className=" ">
          
          </div>
        </div>

        <p className="text-sm font-bold underline mb-3">Description:</p>
        <p className="font-bold text-sm mb-4">{description}</p>

        <div className="flex gap-3">
          <p className="text-sm font-bold underline mb-3">Seller Name:</p>
          <p className="font-bold text-sm mb-4 ">{seller_name}</p>
        </div>
        <div className="flex gap-3">
          <p className="text-sm font-bold underline mb-3">Seller Email:</p>
          <p className="font-bold text-sm mb-4">{seller_email}</p>
        </div>
        <Link to={`/checkout/${_id}`}>
              {" "}
              <button className="  btn btn-success w-40 mt-12 ">Buy Now</button>
            </Link>
      </div>
    </div>
  );
};

export default DetailsAllToys;
