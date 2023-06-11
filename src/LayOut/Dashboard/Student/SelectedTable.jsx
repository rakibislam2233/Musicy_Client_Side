import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { removeFromDb } from "../../../utilities/fakedb";
import Swal from "sweetalert2";
const SelectedTable = ({ user }) => {
    const [remove,setRemove] = useState(false);
    const deleteClass = id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this class",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,Delete Class",
          }).then((result) => {
            if (result.isConfirmed) {
                removeFromDb(id)
                setRemove(true)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Class Booking Deleted Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
          })

    }
  return (
     <>
     {
        !remove &&  <tr>
        <td>
          <img className="w-12 h-12 rounded" src={user.image} alt="" />
        </td>
        <td>{user.className}</td>
        <td>{user.instructorName}</td>
        <td>{user.instructorEmail}</td>
        <td>{user.availableSeats}</td>
        <td>${user.price}</td>
        <td>
          <button className=" bg-amber-500 p-2 rounded">
            <MdPayment className="w-6 h-6"></MdPayment>
          </button>
        </td>
        <td>
          <button onClick={()=>deleteClass(user._id)} className=" bg-rose-600 p-2 rounded">
            <HiTrash className="w-6 h-6"></HiTrash>
          </button>
        </td>
      </tr>
     }
     </>
  );
};

export default SelectedTable;
