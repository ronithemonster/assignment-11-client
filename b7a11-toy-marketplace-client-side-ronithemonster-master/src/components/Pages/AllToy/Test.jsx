import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Test = ({ toy }) => {
  const { user } = useContext(AuthContext);
  console.log(toy);

  const {
    _id,
    description,
    picture_url,
    sub_category,
    quantity,
    rating,
    price,
    seller_name,
    available_quantity,
    name,
    toyName,
    date,
    seller_email,
    customerName,
  } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture_url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>

      <td>{seller_name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{available_quantity}</td>

      <td>
       <Link to={`/details/${_id}`}> <button  className="btn btn-sm btn-circle btn-outline">
          <FaInfoCircle />
        </button></Link>
      </td>
    </tr>
  );
};

export default Test;
