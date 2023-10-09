import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="ml-4">
      <div className="bg-[#EDF3F8] py-6 md:py-11 md:w-[1525px] w-[445px] rounded-md mt-4 md:mt-10">
        <div className="md:flex md:items-center md:justify-center md:max-w-[1380] md:gap-7 md:flex-row-reverse md:pr-44 lg:pr-2">
          <div className="md:max-w-3xl rounded-lg pl-2 flex md:flex   md:flex-raw gap-2">
            <img
              data-aos="fade-right"
              className="lg:w-1/3 md:w-1/2 w-28 object-cover rounded-lg"
              src="https://i.ibb.co/3h2y78S/pexels-photography-maghradze-ph-10401187.jpg"
              alt=""
            />
            <img
              data-aos="fade-right"
              className="lg:w-1/3 md:w-1/2 w-28  object-cover rounded-lg"
              src="https://i.ibb.co/7KQfTLg/pexels-polina-tankilevitch-4110012.jpg"
              alt=""
            />
            <img
              data-aos="fade-right"
              className="lg:w-1/3 md:w-1/2 w-28  object-cover rounded-lg"
              src="https://i.ibb.co/TYMtKwV/pexels-fatih-do-rul-13659743.jpg"
              alt=""
            />
          </div>
          <div className="w-full md:w-[400px] pl-2 md:pl-4" data-aos="slide-up">
            <h1 className="text-2xl md:text-5xl font-bold">
              LET’S PLAN YOUR WEDDING
            </h1>
            <p className="py-3 md:py-6">
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
