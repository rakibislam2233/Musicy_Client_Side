import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import InstructorDetails from "./InstructorDetails";
import getInstructorData from "../../../Hook/getInstructorData";

const Instructor = () => {
  const instructor = getInstructorData()
  return (
    <Container>
      <div className="pt-20">
       <h2 className="text-center font-semibold text-3xl py-5">All Instructor</h2>
       <div className="w-full grid grid-cols-4 gap-5 py-5">
        {
         instructor.map(instructor=><InstructorDetails instructor={instructor}></InstructorDetails>)
        }
       </div>
      </div>
    </Container>
  );
};

export default Instructor;
