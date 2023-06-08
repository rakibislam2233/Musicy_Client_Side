import React from "react";
import CountUp from "react-countup";
const OurService = () => {
  return (
  <div className="p-5">
      <div className="w-full h-full bg-amber-500 py-10 rounded-2xl flex flex-col md:flex-row justify-evenly items-center gap-5">
      <div className="text-center relative">
        <CountUp
          className="text-3xl font-semibold relative text-center"
          start={0}
          end={50}
          duration={5}
          delay={0}
        ></CountUp>{" "}
        <span className="absolute -top-3 font-semibold text-xl ">+</span>
        <h2 className="text-xl font-bold">Instructor</h2>
      </div>
      <div className="text-center relative">
        <CountUp
          className="text-3xl font-semibold relative text-center"
          start={0}
          end={952}
          duration={2}
          delay={0}
        ></CountUp>{" "}
        <span className="absolute -top-3 font-semibold text-xl ">+</span>
        <h2 className="text-xl font-bold">Total Student</h2>
      </div>
      <div className="text-center relative">
        <CountUp
          className="text-3xl font-semibold relative text-center"
          start={0}
          end={20}
          duration={5}
          delay={0}
        ></CountUp>{" "}
        <span className="absolute -top-3 font-semibold text-xl ">+</span>
        <h2 className="text-xl font-bold">Total Classes</h2>
      </div>
      <div className="text-center relative">
        <CountUp
          className="text-3xl font-semibold relative text-center"
          start={0}
          end={1120}
          duration={2}
          delay={0}
        ></CountUp>
        <span className="absolute -top-3 font-semibold text-xl ">+</span>
        <h2 className="text-xl font-bold">
         Success Student 
        </h2>
      </div>
    </div>
  </div>
  );
};

export default OurService;
