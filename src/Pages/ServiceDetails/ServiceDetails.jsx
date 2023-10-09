
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData()
    const { id } = useParams();
    const service = services.find(service => service.id === id)
    console.log(service);
    return (
        <div className=''>
            <img className='w-[1000px] h-[365px] object-cover mt-12 ml-11' src={service.detailsPicture} alt="" />
            <p className='ml-11 mt-10 font-bold  text-4xl'>{service.title}</p>
            <p className='ml-11 mt-7 font-normal w-[1000px] text-justify text-lg'>{service.description}</p>
            <div>
            <button className='btn mt-10 w-3/5 lg:ml-14 btn-accent'>{service.buttonText}</button>
            </div>
                
            
        </div>
    );
};

export default ServiceDetails;