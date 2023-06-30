
import '../../styles/index.scss'
import Logo from '../../assets/logo.png';
import CommanBtn from '../CommanBtn/CommanBtn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';




const Header = () => {

    const [pageScrollPosition, setPageScrollPosition] = useState(0)

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

                    <div className='menuContainer'>
                        <div className='menuList1'>
                            <ul>
                                <li>Call Us: 548978478</li>
                                <li>Email us: demo@example.com</li>
                                <li id='addres'>Our address: 45 Dream street Austria</li>
                            </ul>
                        </div>

                        <div className='menuList2'>
                            <ul>
                                <li>08:00 am - 06:00 pm</li>
                                <li>
                                    <ul>
                                        <li><FacebookOutlinedIcon /></li>
                                        <li><TwitterIcon /></li>
                                        <li><InstagramIcon /></li>
                                        <li><PinterestIcon /></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>


                {/* --main menu-- */}
                <div className='mainMenuContainer'>

                    <div className='mainMenuList1'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>Team</li>
                            <li>Gallery</li>
                        </ul>

                    </div>


                    <div className='mainMenuList2'>

                        <Box>
                            <CommanBtn text="Meet With Us" />

                        </Box>



                    </div>



                    <div className='mobileMenu'>
                        <MenuOpenIcon sx={{ color: 'black', fontSize: '3rem' }} />
                    </div>


                </div>


            </div>
        </>
    );
}


export default Header;