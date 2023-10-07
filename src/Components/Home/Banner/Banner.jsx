import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Banner = () => {

    useEffect(()=>{
        Aos.init({duration:2000})

    },[])
    return (
        <div className="container mx-auto">
            <div className=" bg-[#EDF3F8] py-28 rounded-md mt-10">
                <div className=" flex items-center justify-center max-w-[1380] gap-7 lg:flex-row-reverse pr-96">
                    <div className="max-w-xs rounded-lg shadow-2xl flex gap-5"  >
                        <img data-aos = "fade-right" className="w-64 object-cover rounded-lg" src="https://i.ibb.co/3h2y78S/pexels-photography-maghradze-ph-10401187.jpg" alt="" />
                        <img data-aos = "fade-right" className="w-64 object-cover rounded-lg" src="https://i.ibb.co/7KQfTLg/pexels-polina-tankilevitch-4110012.jpg" alt="" />
                        <img data-aos = "fade-right" className="w-64 object-cover rounded-lg" src="https://i.ibb.co/TYMtKwV/pexels-fatih-do-rul-13659743.jpg" alt="" />
                    </div>
                    <div className="w-[400px]" data-aos = "slide-up">
                        <h1 className="text-5xl font-bold">LET’S PLAN YOUR WEDDING</h1>
                        <p className="py-6">Welcome and open yourself to your truest love this year with us! With the Release Process.</p>
                        <button className="btn btn-outline btn-primary">Discover More</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;

