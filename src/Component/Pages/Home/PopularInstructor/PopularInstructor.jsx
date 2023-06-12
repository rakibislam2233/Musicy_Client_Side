import React from 'react';
import getInstructorData from '../../../../Hook/getInstructorData';
import InstructorDetails from '../../Instructor/InstructorDetails';

const PopularInstructor = () => {
    const instructor = getInstructorData();

    return (
  <div className="pt-20">
       <h2 className="text-center font-semibold text-3xl py-2">Popular  Instructor</h2>
       <div className="w-full grid grid-cols-3 gap-5 py-5">
        {
         instructor.slice(0,6).map(instructor=><InstructorDetails instructor={instructor}></InstructorDetails>)
        }
       </div>
      </div>
    );
};

export default PopularInstructor;