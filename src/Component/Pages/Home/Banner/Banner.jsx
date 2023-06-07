import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliderComponent from "./SliderComponent/SliderComponent";
// import { Helmet } from "react-helmet";
const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const images1 = "https://i.postimg.cc/ZqSrLrrH/kids-in-music-class.jpg";
  const images2 = "https://i.postimg.cc/XYjdCFTF/img1.jpg";
  const images3 = "https://i.postimg.cc/yY5VzzsG/img4.jpg";
  const images4 =
    "https://i.postimg.cc/d3Ld0nYs/Children-learning-music-jpg.webp";
  const images5 = "https://i.postimg.cc/k4MK0qYt/Helping-Children-Learn-Through-Music.jpg";
  return (
    <>
      <div className="w-full">
        {/* this is a react helmet */}
        {/* <Helmet>
        <title>Home</title>
      </Helmet> */}
        {/* banner section added */}
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <SliderComponent images={images1}></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide2">
            <SliderComponent images={images2}></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide3">
            <SliderComponent images={images3}></SliderComponent>
          </div>
          <div className="keen-slider__slide number-slide4">
            <SliderComponent images={images4}></SliderComponent>
          </div>

          <div className="keen-slider__slide number-slide5">
            <SliderComponent images={images5}></SliderComponent>
          </div>
        </div>
        {/* banner section end */}
      </div>
    </>
  );
};

export default Banner;
