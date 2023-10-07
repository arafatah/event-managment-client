import { GiButterfly } from "react-icons/gi";

const Portfolio = () => {
    return (
        <div className="mt-16">
            <div className="mx-auto container">
            <h4 className="flex text-center text-4xl mb-10 items-center justify-center">Our Sweet Moments<GiButterfly className="text-2xl"></GiButterfly></h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 ">
                <img src="https://i.ibb.co/9VGsbZJ/pexels-maksim-veter-15686842.jpg" alt="" />
                <img src="https://i.ibb.co/RC3TMz0/pexels-tran-nhu-tuan-11722307.jpg" alt="" />
                <img src="https://i.ibb.co/F3ZB1nn/pexels-onur-kaya-14788180.jpg" alt="" />
                <img src="https://i.ibb.co/BPNpgPC/pexels-jin-wedding-5729029.jpg" alt="" />
                <img src="https://i.ibb.co/fC1tRcj/pexels-studio-negarin-2613461.jpg" alt="" />
                <img src="https://i.ibb.co/09WjKxw/pexels-nataza-krys-1406374.jpg" alt="" />
            </div>
        </div>
    );
};

export default Portfolio;