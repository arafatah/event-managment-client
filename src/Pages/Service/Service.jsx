import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Aos from "aos";
import 'aos/dist/aos.css'


const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setService(data))
            Aos.init({duration:2000})
    }, [])



    return (
        <div className="pl-6">
            <div className="bg-[#EDF3F8] mt-32 md:w-[1536px] w-[450px]">
                <div className="text-center pt-8" data-aos = "fade-right">
                <h3 className="font-normal text-xl mt-2 mb-4">Our Services</h3>
                <h4 className="font-medium text-4xl mb-3">WHAT WE CAN DO</h4>
            
                </div>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-10 pb-24 px-20">

                    {
                        service.map(services => <Services key={services.id} services={services}></Services>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Service;