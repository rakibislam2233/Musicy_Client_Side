import React from "react";
const Gallerys = () => {
  return (
    <>
    {/* this is a gallery section */}
      <div className="w-full py-5">
        <h3 className="text-4xl text-center font-semibold py-8 ">
          Our Gallery
        </h3>
        <div className="w-full h-full grid lg:grid-cols-4">
          <div
            className="lg:col-span-2  cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.ibb.co/YpfNNSw/vocal-1.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            className=" cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.ibb.co/pQwK3G3/vaiolin-1.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            className=" cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.ibb.co/3kJsv7L/gitter-2.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
        </div>
        <div className="w-full h-full grid lg:grid-cols-4">
          <div
            className=" cursor-pointer relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.ibb.co/6nGMRgV/piano-3.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            className=" lg:col-span-2  cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.ibb.co/MNZzk8K/other-2.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            className=" cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.ibb.co/mDRkJ05/violin-1.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
        </div>
        <div className="w-full h-full grid lg:grid-cols-4">
          <div className=" cursor-pointer  relative border">
            <img
              className="w-full h-96"
              src="https://i.ibb.co/mbRx2p4/muciy.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            className=" cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.ibb.co/71CnNCx/Instructor-8.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
          <div
            className="lg:col-span-2  cursor-pointer  relative border"
          >
            <img
              className="w-full h-96"
              src="https://i.ibb.co/qY9z1Hv/Saxophone-1.jpg"
              alt=""
            />
            <div className="bg-[#024E92] w-full h-full opacity-0 hover:opacity-50 duration-500 absolute top-0 "></div>
          </div>
        </div>
      </div>
       {/* gallery section end */}
    </>
  );
};

export default Gallerys;
