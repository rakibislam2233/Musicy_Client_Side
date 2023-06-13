import React, { useEffect, useState } from "react";
import ClassesDetails from "../../Classes/ClassesDetails";
import Details from "./Details";
import { Fade, Flip, Hinge, JackInTheBox, Roll, Slide } from "react-awesome-reveal";
const PopularClasses = () => {
  const [popularClasses, setpopularClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/approvedClass`)
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((dt) => dt.enrolled >= 2);
        setpopularClasses(filter);
      });
  }, []);
  return (
    <div className="py-5">
      <JackInTheBox>
      <h2 className="text-center font-semibold text-3xl py-5">Popular Classes</h2>
      </JackInTheBox>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {popularClasses.slice(0, 6).map((singleClass, i) => (
          <Details key={i} singleClass={singleClass}></Details>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
