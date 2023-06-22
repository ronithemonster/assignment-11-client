import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
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
  } = toyDetails;
  return (
    <div className="card card-side bg-base-100 shadow-xl my-container">
  <figure className="rounded-md"><img className="rounded-md" src={picture_url} alt="Movie"/></figure>
  <div className="card-body">
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
                <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>
    <div className="card-actions justify-start">
   <Link to={`/checkout/${_id}`}> <button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
  );
};

export default ToyDetails;
