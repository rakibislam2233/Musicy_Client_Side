import React from 'react';
import getInstructorData from '../../../../Hook/getInstructorData';
import InstructorDetails from '../../Instructor/InstructorDetails';
import { Slide } from 'react-awesome-reveal';

const PopularInstructor = () => {
    const instructor = getInstructorData();

    return (
  <div className="py-5">
       <Slide>
       <h2 className="text-center font-semibold text-3xl py-2">Popular  Instructor</h2>
       </Slide>
       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {
         instructor.slice(0,6).map((instructor,i)=><InstructorDetails key={i}instructor={instructor}></InstructorDetails>)
        }
       </div>
      </div>
    );
};

export default PopularInstructor;