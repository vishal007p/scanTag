
import '../../styles/index.scss'
 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import InstagramIcon from '@mui/icons-material/Instagram';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';


import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';




const Header = () => {

    const [pageScrollPosition, setPageScrollPosition] = useState(0)
    // --mobile menu active state--
    const [mobileMenuActive, setmobileMenuActive] = useState(false)

    useEffect(() => {
        const updatePosition = () => {
            setPageScrollPosition(window.pageYOffset);

        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, [])

    return (
        <>
            <div className={`HeaderContainer ${pageScrollPosition > 100 && "scrollHeader"}`}>

                {/* --logo-- */}
                <div className='logo'>
                    <img src="/logo.png" alt="logo" />
                </div>


                {/* --main menu-- */}
                <div className={`mainMenuContainer ${mobileMenuActive && "mainMenuContainerActive"}`}>

                    <div className='mainMenuList1'>
                        <ul>
                            <li> <Link activeClass="active" to="home"
                                spy={true}
                                smooth={true}
                                offset={70} duration={1000} >Home</Link></li>

                            <li> <Link activeClass="active" to="service"
                                spy={true}
                                smooth={true}
                                offset={70} duration={1000} >About</Link></li>


                            <li> <Link activeClass="active" to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={70} duration={1000} >Portfolio</Link></li>

                            <li> <Link activeClass="active" to="home"
                                spy={true}
                                smooth={true}
                                offset={70} duration={1000} >Services</Link></li>

                            <li> <Link activeClass="active" to="contact"
                                spy={true}
                                smooth={true}
                                offset={-300} duration={1000} >Contact</Link></li>


                        </ul>

                    </div>


                    <div className='mainMenuList2'>

                        <ul>
                            <a href="https://wa.me/+919313212322"> <li><CallIcon sx={{ marginRight: '10px' }} />+91  9313212322</li></a>
                            <a href="mailto:support@serv-you.com">   <li><EmailIcon sx={{ marginRight: '10px' }} />support@serv-you.com</li></a>
                            <li><FacebookOutlinedIcon sx={{ color: 'white' }} /></li>
                            <li><InstagramIcon sx={{ color: 'white' }} /></li>

                        </ul>
                    </div>

                </div>

                <div className='mobileMenu'>
                    <MenuOpenIcon sx={{ color: 'white', fontSize: '3rem' }} onClick={() => setmobileMenuActive(!mobileMenuActive)} />
                </div>

            </div>
        </>
    );
}


export default Header;