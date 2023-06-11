const SliderComponent = ({ images }) => {
  return (
    // this is slidercomponent
    <div
      style={{
        backgroundImage: `url(${images})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      className={`bg-gray-900 bg-opacity-30 w-full h-screen cursor-pointer`}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="w-full max-w-6xl mx-auto h-full flex justify-end items-center p-5"
      >
        <div className="space-y-4">
          <h2 className="text-6xl tracking-wider font-bold text-white">
            Learn <span className="text-amber-500"> The Music </span> <br />
            From The Masters
          </h2>
          <button
            className="py-3 px-5 rounded-xl  bg-amber-600 shadow-lg font-semibold  text-white"
          >
           Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
