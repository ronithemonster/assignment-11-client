import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleByCustomer = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = user?.displayName ? user?.displayName : form.name.value;
    const toyName = form.toy.value;
    const date = form.date.value;
    const email = user?.email;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const order = {
      customerName: name,
      date,
      email,
      details: description,
      price,
      picture_url,
      toyName: toyName,
      quantity,
    };
    console.log(order);

    fetch("https://server-for-toy-mu.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order been sent successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/mytoy");
        }
      });
  };

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
  } = loadedData;
  return (
    <div className="my-container">
      <h2 className="text-3xl underline font-bold text-center mt-2 mb-8">Order Details</h2>
      <form onSubmit={handleByCustomer}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name:</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email:</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Date:</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name: </span>
            </label>
            <input
              type="text"
              name="toy"
              defaultValue={name}
              readOnly
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price: </span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price + "" + "USD"}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity: </span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={available_quantity}
              readOnly
              className="input input-bordered"
            />
          </div>
        </div>
        <button className="btn mt-8  w-full"> Order Now </button>
      </form>
    </div>
  );
};

export default CheckOut;
