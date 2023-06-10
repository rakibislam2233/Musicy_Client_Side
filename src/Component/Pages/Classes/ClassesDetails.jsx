import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const ClassesDetails = ({singleClass}) => {
  const {_id,image,instructorName,availableSeats,price,className,selected} = singleClass
  const bookingClass = classInfo =>{
   axios.post(`http://localhost:5000/selectedClass`,classInfo)
   .then(res=>{
    console.log(res.data);
    if(res.data.insertedId){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Class Selected",
        showConfirmButton: false,
        timer: 1500,
      });
    }
   })
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
          selected ? <> <button disabled onClick={()=>bookingClass(singleClass)} className='py-2 px-5 bg-gray-500 text-white rounded-xl '>Select Now</button></>:<> <button onClick={()=>bookingClass(singleClass)} className='py-2 px-5 bg-amber-500 text-white rounded-xl hover:bg-amber-400 transition duration-500'>Select Now</button></>
        }
       
      </div>
    </div>
    );
};

export default ClassesDetails;