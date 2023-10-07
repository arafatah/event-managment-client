import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Contact = () => {


    useEffect(() => {
        Aos.init({ duration: 2000 })

    }, [])
    return (
        <div className="py-12">
            <div className="hero min-h-full container mx-auto object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/B3GR79h/pexels-terje-sollie-313707.jpg)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl py-11 text-white">
                        <h1 className="mb-5 text-5xl font-bold" data-aos = "fade-left">Lets Celebrate Your Love</h1>
                        <button className="btn glass text-white" data-aos = "fade-right">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;