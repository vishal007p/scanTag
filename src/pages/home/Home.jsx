import Banner from "../../component/Banner/Banner";
import Header from "../../component/Header/Header";
import Services from "../Services/Services";
import AboutUs from "../aboutUs/AboutUs";
import Contact from "../contact/Contact";
import ContactForm from "../contactForm/ContactForm";
import Portfolio from "../portfolio/Portfolio";



const Home = () => {
    return (

        <>
            <Header />
            <Banner />
            <Services />
            <AboutUs/>
            <Contact/>
            <ContactForm/>
            <Portfolio/>
        </>


    );
}



export default Home;