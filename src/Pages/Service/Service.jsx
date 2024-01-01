import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Aos from "aos";
import 'aos/dist/aos.css';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setService(data));
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="container mx-auto px-4 md:px-0">
            <div className="bg-[#EDF3F8] mt-12 md:mt-32 md:w-full mx-auto rounded-lg overflow-hidden shadow-xl">
                <div className="text-center pt-8" data-aos="fade-right">
                    <h3 className="font-normal text-xl mt-2 mb-4">Our Services</h3>
                    <h4 className="font-medium text-4xl mb-3">WHAT WE CAN DO</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 pb-12 px-4">
                    {service.map(services => (
                        <Services key={services.id} services={services}></Services>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;