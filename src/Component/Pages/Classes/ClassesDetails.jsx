import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import { useAdmin } from '../../../Hook/useAdmin';
import { useInstructor } from '../../../Hook/useInstructor';

const ClassesDetails = ({singleClass}) => {
  const {_id,image,instructorName,availableSeats,price,className} = singleClass
  const [dis, setDis] = useState([]);
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const [selected,setSelected] = useState(false);
  useEffect(()=>{
    const checked = getShoppingCart()
    console.log(checked);
    const selected = Object.keys(checked)
    setDis(selected)
  },[])
  const bookingClass = id =>{
    addToDb(id)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Class Booking Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }
    return (
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
        <div className="">
        Instructor : {instructorName}
        </div>
        <h2>Available seats : {availableSeats}</h2>
        <h2>Price : ${price}</h2>
        {
         dis.find(i=>i===_id) || selected || isAdmin || isInstructor ? <><button disabled  className='py-2 px-5 bg-gray-500 text-white rounded-xl '>Select Now</button></>:<> <button onClick={()=>[bookingClass(_id),setSelected(!selected)]} className='py-2 px-5 bg-amber-500 text-white rounded-xl hover:bg-amber-400 transition duration-500'>Select Now</button></>
        }
       
      </div>
    </div>
    );
};

export default ClassesDetails;