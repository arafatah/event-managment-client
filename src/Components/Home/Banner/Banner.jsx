import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#EDF3F8] py-6 md:py-11 -z-10 md:max-w-[1525px] lg:max-w-[1700px] w-full rounded-md mt-4 md:mt-10">
        <div className="md:flex md:items-center z-10 px-3 md:justify-center md:gap-7 md:flex-row-reverse md:pr-4 lg:pr-2">
          <div className="md:max-w-3xl rounded-lg z-10 pr-4 mb-6 md:mb-0 md:mr-4 w-full md:w-1/2">
            <div className="flex gap-2 ">
              <img
                data-aos="fade-right"
                className="lg:w-1/3 z-10 md:w-1/2 w-1/3 object-cover rounded-lg"
                src="https://i.ibb.co/3h2y78S/pexels-photography-maghradze-ph-10401187.jpg"
                alt=""
              />
              <img
                data-aos="fade-right"
                className="lg:w-1/3 z-10 md:w-1/2 w-1/3 object-cover rounded-lg md:block"
                src="https://i.ibb.co/7KQfTLg/pexels-polina-tankilevitch-4110012.jpg"
                alt=""
              />
              <img
                data-aos="fade-right"
                className="lg:w-1/3 z-10 md:w-1/2 w-1/3 object-cover rounded-lg  md:block"
                src="https://i.ibb.co/TYMtKwV/pexels-fatih-do-rul-13659743.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-[400px] md:pl-4" data-aos="slide-up">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              LET’S PLAN YOUR WEDDING
            </h1>
            <p className="py-3 md:py-4">
              Welcome and open yourself to your truest love this year with us!
              With the Release Process.
            </p>
            <button className="btn btn-outline btn-primary">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
