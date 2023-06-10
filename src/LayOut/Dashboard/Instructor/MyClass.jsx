import React, { useContext, useRef, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { useQuery } from 'react-query';
import { UserContext } from '../../../Component/Context/AuthProvider';
import { HiPencilAlt } from 'react-icons/hi';

const MyClass = () => {
    const {user} = useContext(UserContext)
    const [axiosSecure] = useAxiosSecure()
  const { data: addedClass = [], refetch,isLoading} = useQuery(["myClass",user?.email], async () => {
    const res = await axiosSecure(`http://localhost:5000/instructor/myClass/${user?.email}`);
    return res.data  ;
  })
  // TODO:Total Enrolled Students and Feedback
    return (
        <div className='w-full p-5'>
            <h3 className='text-3xl font-semibold text-center'>My Classes</h3>
            <div className="overflow-x-auto w-full my-3">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>ClassName</th>
              <th>Price</th>
              <th>Seats</th>
              <th>Status</th>
              <th>Enrolled</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {addedClass.map((user, i) => (
              <tr>
                <td><img className='w-12 h-12 rounded' src={user.image} alt="" /></td>
                <td>{user.className}</td>
                <td>${user.price}</td>
                <td>{user.availableSeats}</td>
                <td className='font-semibold'>{user.status}</td>
                <td>40</td>
                <td>Something is worng</td>
                <td>
                  <button className=' bg-rose-600 p-2 rounded'><HiPencilAlt className='w-6 h-6'></HiPencilAlt></button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyClass;