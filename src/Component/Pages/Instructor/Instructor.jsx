import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import InstructorDetails from "./InstructorDetails";
import getInstructorData from "../../../Hook/getInstructorData";
import { Fade, Slide } from "react-awesome-reveal";

const Instructor = () => {
  const instructor = getInstructorData()
  return (
    <Container>
      <div className="pt-20">
      <Slide>
      <h2 className="text-center font-semibold text-3xl py-5">All Instructor</h2>
      </Slide>
       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
        {
         instructor.map((instructor,i)=><InstructorDetails key={i} instructor={instructor}></InstructorDetails>)
        }
       </div>
      </div>
    </Container>
  );
};

export default Instructor;
