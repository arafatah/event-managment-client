import Cards from "../../Pages/Cards/Cards";
import Contact from "../../Pages/Contact/Contact";
import Service from "../../Pages/Service/Service";
import Teams from "../../Pages/Teams/Teams";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <Service></Service>
           <Teams></Teams>
           <Contact></Contact>
           <Cards></Cards>
           <Footer></Footer>
           
           
        </div>
    );
};

export default Home;