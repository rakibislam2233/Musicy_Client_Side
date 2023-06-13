import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const Details = ({ singleClass }) => {
    const {user} = useContext(UserContext)
  const { image, instructorName, availableSeats, price, className,enrolled } =
    singleClass;
    const bookingClass = (data) => {
        const { _id, image, instructorName, availableSeats, price, className } =
          data;
        const newData = {
          selectedId: _id,
          image,
          instructorName,
          availableSeats,
          price,
          className,
          userEmail: user?.email,
        };
        axios.post(`http://localhost:5000/selectedClassData`, newData)
          .then((res) => {
            (res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Class Booking Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      };
  return (
    <>
    {
      availableSeats <= 0 ?<>
          <div className="cursor-pointer border p-3 rounded-2xl bg-rose-600">
      <div className=" space-y-2 font-semibold">
        <div
          className="
          w-full 
          relative 
          overflow-hidden 
          rounded-xl
        "
        >
          <img
            className="
            object-cover 
            h-72 
            w-full 
          "
            src={image}
            alt="Room"
          />
        </div>
        <div className="font-semibold text-2xl">{className}</div>
        <div className="">Instructor : {instructorName}</div>
        <h2>Available seats : {availableSeats<=0?0:availableSeats}</h2>
        <h2>Enrolled Student : {enrolled?enrolled:0}</h2>
        <h2>Price : ${price}</h2>
        {availableSeats === 0 ? (
          <>
            <button
              disabled
              className="py-2 px-5 bg-gray-500 text-white rounded-xl "
            >
              Select Now
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => bookingClass(singleClass)}
              className="py-2 px-5 bg-amber-500 text-white rounded-xl hover:bg-amber-400 transition duration-500"
            >
              Select Now
            </button>
          </>
        )}
      </div>
    </div>
      </>: <>
      <div className="cursor-pointer border p-3 rounded-2xl">
      <div className=" space-y-2 font-semibold">
        <div
          className="
          w-full 
          relative 
          overflow-hidden 
          rounded-xl
        "
        >
          <img
            className="
            object-cover 
            h-72 
            w-full 
          "
            src={image}
            alt="Room"
          />
        </div>
        <div className="font-semibold text-2xl">{className}</div>
        <div className="">Instructor : {instructorName}</div>
        <h2>Available seats : {availableSeats<=0?0:availableSeats}</h2>
        <h2>Enrolled Student : {enrolled?enrolled:0}</h2>
        <h2>Price : ${price}</h2>
        {availableSeats === 0 ? (
          <>
            <button
              disabled
              className="py-2 px-5 bg-gray-500 text-white rounded-xl "
            >
              Select Now
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => bookingClass(singleClass)}
              className="py-2 px-5 bg-amber-500 text-white rounded-xl hover:bg-amber-400 transition duration-500"
            >
              Select Now
            </button>
          </>
        )}
      </div>
    </div>
      </>
    }
  </>

  );
};

export default Details;
