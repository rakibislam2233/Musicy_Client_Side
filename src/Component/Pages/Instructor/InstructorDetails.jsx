import React from "react";
import { JackInTheBox, Roll, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const InstructorDetails = ({ instructor }) => {
  const { name, email, image } = instructor;
  return (
    <Roll damping={0.1}>
<div className="cursor-pointer group  border p-2 pb-5 rounded-2xl">
      <div className="flex flex-col gap-2 w-full">
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
                group-hover:scale-110
                duration-200
                transition
              "
            src={image}
            alt="Room"
          />
          <div
            className="
              absolute
              top-3
              right-3
            "
          ></div>
        </div>
        <div className="font-semibold text-lg">{name}</div>
        <div className="font-light text-neutral-500">
         {email}
        </div>
        <Link to='/classes'><button className="bg-amber-500 text-white py-2 px-5 rounded-xl font-semibold">See Class</button></Link>
      </div>
    </div>
    </Roll>
    
  );
};

export default InstructorDetails;
