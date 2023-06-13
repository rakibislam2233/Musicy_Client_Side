import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { UserContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../../Hook/useAdmin";
import { useInstructor } from "../../../Hook/useInstructor";
const ClassesDetails = ({ singleClass }) => {
  const { user } = useContext(UserContext);
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const { image, instructorName, availableSeats, price, className } =
    singleClass;
  const bookingClass = (data) => {
    if (!user) {
   Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to booking class",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return
    } 
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
    axios
      .post(`http://localhost:5000/selectedClassData`, newData)
      .then((res) => {
        res.data;
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
      {availableSeats <= 0? (
        <>
          <div className="cursor-pointer bg-rose-600 border p-3 rounded-2xl">
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
              <h2>Price : ${price}</h2>
              {isAdmin || isInstructor || availableSeats === 0 ? (
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
      ) : (
        <>
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
              <h2>Price : ${price}</h2>
              {isAdmin || isInstructor ||availableSeats === 0 ? (
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
      )}
    </>
  );
};

export default ClassesDetails;
