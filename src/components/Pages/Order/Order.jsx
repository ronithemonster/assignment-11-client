import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import OrderCard from "./OrderCard";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/titleHooks";

const Order = () => {
  const [orders, setOrders] = useState();
  const { user } = useContext(AuthContext);
  useTitle('My Toys')

  const url = `https://server-for-toy-mu.vercel.app/order?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-for-toy-mu.vercel.app/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your order has been deleted.", "success");

              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full my-container">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Product info</th>
            <th> Orderer Info </th>
            <th> Available Quantity</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <OrderCard
              key={order._id}
              order={order}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
