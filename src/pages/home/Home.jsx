import Banner from "../../component/Banner/Banner";
import Header from "../../component/Header/Header";
import Services from "../Services/Services";
import AboutUs from "../aboutUs/AboutUs";
import Contact from "../contact/Contact";
import ContactForm from "../contactForm/ContactForm";



const Home = () => {
    return (

        <>
            <Header />
            <Banner />
            <Services />
            <AboutUs/>
            <Contact/>
            <ContactForm/>
        </>


    );
}



export default Home;