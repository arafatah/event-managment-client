

const Services = ({ services }) => {
    const { serviceCategory, picture, details } = services;
    return (
        <div>
            
            <div className="card lg:h-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="" className="rounded-xl w-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{serviceCategory}</h2>
                    <p>{details}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Services;