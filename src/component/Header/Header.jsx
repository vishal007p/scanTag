
import '../../styles/index.scss'
import Logo from '../../assets/logo.png';
import CommanBtn from '../CommanBtn/CommanBtn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';




const Header = () => {

    const [pageScrollPosition, setPageScrollPosition] = useState(0)
    // --mobile menu active state--
     const [mobileMenuActive ,setmobileMenuActive]=useState(false)

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
                    <img src={Logo} alt="logo" />
                </div>


                {/* ---menu-- */}
                <div className='menu'>

                    <div className={`menuContainer `}>
                        <div className='menuList1'>
                            <ul>
                            <a href="https://wa.me/+918460039457"> <li><CallIcon sx={{ marginRight: '10px' }} />+91  8460039457</li></a>
                            <a href="mailto:abhishek@scan-tag.com<">   <li><EmailIcon sx={{ marginRight: '10px' }} />abhishek@scan-tag.com</li></a> 

                            </ul>
                        </div>

                        <div className='menuList2'>
                            <ul>
                                <li style={{ display: 'flex', alignItems: 'center' }}><AccessTimeIcon sx={{ marginRight: '10px' }} />08:00 am - 06:00 pm</li>

                            </ul>

                        </div>

                    </div>

                </div>


                {/* --main menu-- */}
                <div className={`mainMenuContainer ${mobileMenuActive && "mainMenuContainerActive"}`}>

                    <div className='mainMenuList1'>
                        <ul>
                            <li> <Link activeClass="active" to="home"
                                spy={true}
                                smooth={true}
                                offset={-70} duration={1000} >Home</Link></li>

                            <li> <Link activeClass="active" to="service"
                                spy={true}
                                smooth={true}
                                offset={-70} duration={1000} >About</Link></li>


                            <li> <Link activeClass="active" to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70} duration={1000} >Portfolio</Link></li>

                            <li> <Link activeClass="active" to="home"
                                spy={true}
                                smooth={true}
                                offset={-70} duration={1000} >Services</Link></li>

                            <li> <Link activeClass="active" to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70} duration={1000} >Contact</Link></li>


                        </ul>

                    </div>


                    <div className='mainMenuList2'>
                        <ul>
                            <li><FacebookOutlinedIcon sx={{ color: 'white' }} /></li>
                            <li><TwitterIcon sx={{ color: 'white' }} /></li>
                            <li><InstagramIcon sx={{ color: 'white' }} /></li>
                            <li><PinterestIcon sx={{ color: 'white' }} /></li>
                        </ul>
                    </div>

                </div>

                <div className='mobileMenu'>
                    <MenuOpenIcon sx={{ color: 'white', fontSize: '3rem' }} onClick={()=>setmobileMenuActive(!mobileMenuActive)}/>
                </div>

            </div>
        </>
    );
}


export default Header;