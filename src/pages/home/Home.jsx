import Banner from "../../component/Banner/Banner";
import Header from "../../component/Header/Header";
import Services from "../Services/Services";
import AboutUs from "../aboutUs/AboutUs";
import Contact from "../contact/Contact";
import ContactForm from "../contactForm/ContactForm";
import Portfolio from "../portfolio/Portfolio";
import Testimonial from "../testimonial/Testimonial";



const Home = () => {
    return (

        <>
            <Header />
            <Banner />
            <Services />
            <AboutUs/>
            <Contact/>
            <ContactForm/>
            {/* <Testimonial/> */}
            <Portfolio/>
        </>


    );
}



export default Home;