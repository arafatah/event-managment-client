import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Services = ({ services }) => {
    const { serviceCategory, picture, details } = services;

    useEffect(()=>{
        Aos.init({duration:2000})

    },[])
    return (
        <div>
            
            <div className="card lg:h-96 bg-base-100 shadow-xl" data-aos = "fade-left">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="" className="rounded-xl w-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{serviceCategory}</h2>
                    <p>{details}</p>
                </div>
                <button className="btn w-full py-4">Read more details</button>
            </div>
        </div>
    );
};

export default Services;