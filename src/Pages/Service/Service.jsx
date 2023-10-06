import { useEffect, useState } from "react";
import Services from "../Services/Services";

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <div>
                <h3 className="text-center text-3xl font-bold my-32">
                    Our services
                </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 bg-[#EDF3F8] py-24 px-20">
                
                {
                    service.map(services => <Services key={services.id} services={services}></Services>)
                }
            </div>
        </div>

    );
};

export default Service;