import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const OrderCard = ({ order, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    description,
    picture_url,
    quantity,
    rating,
    price,
    seller_name,
    name,
    toyName,
    date,
    seller_email,
    customerName,
  } = order;
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
            <div className="text-sm font-semibold">{toyName}</div>
          </div>
        </div>
      </td>
      <td>
        {customerName}
        <br />
        <span className="font-semibold">{user?.email}</span>
      </td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{date}</td>
      <td>
        <th>
          <Link to={`/order/${_id}`}>
            {" "}
            <button className="btn btn-circle  mr-2 btn-outline btn-sm">
              <GrDocumentUpdate />
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline btn-sm"
          >
            <AiFillDelete />
          </button>
        </th>
      </td>

      {/* <th>
         { status==='confirm'? <span className="text-green-500">Confirmed</span> :<button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Pending</button>
         
      }
        </th> */}
    </tr>
  );
};

export default OrderCard;
