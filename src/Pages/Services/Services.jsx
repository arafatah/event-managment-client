import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = ({ services }) => {
    const { serviceCategory, picture, details, price, id } = services;

    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, [])
    return (
        <div>

            <div className="card lg:h-96 bg-base-100 shadow-xl" data-aos="fade-left">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="" className="rounded-xl w-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{serviceCategory}</h2>
                    <p>{details}</p>
                    <p className=" text-white py-1 mt-3 font-semibold text-lg bg-gray-400 w-3/5">{price}</p>
                </div>
                <Link to={`/service/${id}`}><button className="btn w-full py-4">Read more details</button></Link>

            </div>
        </div>
    );
};

export default Services;