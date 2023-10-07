import Contact from "../../Pages/Contact/Contact";
import Service from "../../Pages/Service/Service";
import Teams from "../../Pages/Teams/Teams";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Service></Service>
           <Teams></Teams>
           <Contact></Contact>
           <Footer></Footer>
           
           
        </div>
    );
};

export default Home;