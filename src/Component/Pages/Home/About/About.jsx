import React from "react";
import { HiOutlineCheck } from "react-icons/hi";

const About = () => {
  return (
    <div className="hero py-8">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.postimg.cc/k4MK0qYt/Helping-Children-Learn-Through-Music.jpg"
          className="w-full rounded-lg shadow-2xl"
        />
        <div>
            <h2 className="text-2xl font-semibold py-2 text-amber-500">About</h2>
          <h1 className="text-5xl font-bold">
            Learn The Music From The Core & Become Mastery
          </h1>
          <p className="py-2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="py-2 grid grid-cols-2 gap-4">
            <h1 className="flex gap-1 items-center"><HiOutlineCheck className="w-6  text-amber-500 h-6"></HiOutlineCheck> Basic Knowledge</h1>
            <h1 className="flex gap-1 items-center"><HiOutlineCheck className="w-6  text-amber-500 h-6"></HiOutlineCheck> Vocals Lesson</h1>
            <h1 className="flex gap-1 items-center"><HiOutlineCheck className="w-6  text-amber-500 h-6"></HiOutlineCheck>Instruments</h1>
            <h1 className="flex gap-1 items-center"><HiOutlineCheck className="w-6  text-amber-500 h-6"></HiOutlineCheck>Industry Lesson</h1>
          </div>
          <button className="py-2 px-6 bg-amber-500 rounded-xl font-semibold text-white hover:bg-amber-400 transition duration-500">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
