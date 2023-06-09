import React, { useContext } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { UserContext } from "../../../Component/Context/AuthProvider";
import { useQuery } from "react-query";
import {HiCheck,HiOutlineAnnotation,HiX  } from "react-icons/hi";
import axios from "axios";
import Swal from "sweetalert2";
const ManageClass = () => {
  const { user } = useContext(UserContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: addedClass = [],
    refetch,
    isLoading,
  } = useQuery(["allClass"], async () => {
    const res = await axiosSecure(
      `/class`
    );
    return res.data;
  });
  const updateRole = id=>{
    axios.patch(`http://localhost:5000/manageUsersRole/${id}`)
    .then(res=>{
      refetch()
      if(res.data.modifiedCount>0){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Approved Class Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

  }
  const updateRoleDeny = id=>{
    axios.patch(`http://localhost:5000/manageUsersRoleDeny/${id}`)
    .then(res=>{
      refetch()
      if(res.data.modifiedCount>0){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Deny Class Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

  }
  return (
    <div className="w-full p-4 ">
      <h2 className="text-3xl font-semibold text-center">Manag User</h2>
      <div className="overflow-x-auto w-full my-3">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>ClassImage</th>
              <th>ClassName</th>
              <th>InstructorName</th>
              <th>InstructorEmail</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approved</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {addedClass.map((user, i) => (
              <tr>
                <td>
                  <img className="w-12 h-12 rounded" src={user.image} alt="" />
                </td>
                <td>{user.className}</td>
                <td>{user.instructorName}</td>
                <td>{user.instructorEmail}</td>
                <td>{user.availableSeats}</td>
                <td>${user.price}</td>
                <td className="font-semibold">{user.status}</td>
                <td><button onClick={()=>updateRole(user._id)} className="p-2 bg-amber-400 rounded"><HiCheck className="w-4 h-4"></HiCheck></button></td>
                <td>
                  <button onClick={()=>updateRoleDeny(user._id)} className=" bg-rose-600 p-2 rounded"><HiX className="w-4 h-4"></HiX></button>
                </td>
                <td>
                  <button className=" bg-amber-600 p-2 rounded"><HiOutlineAnnotation className="w-4 h-4"></HiOutlineAnnotation></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
