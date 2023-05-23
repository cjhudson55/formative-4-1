import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import kiLogo from '../assets/kiLogoSmall.png';


const MenuItem = ({ label, to }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    const menuItemStyle = {
        textDecoration: isActive ? 'underline' : 'none'
    };

    return (
        <li className='menu-item-styles'>
            <Link to={to} style={menuItemStyle}>
                {label}
            </Link>
        </li>
    );
};


const Header = () => {
    return (
        <>
            <div id='topnav' className='d-flex'>
                <img src={kiLogo} alt='Logo' height={90} className='image-styles' />
                <div className='ml-auto v-align-middle' >
                    <ul id='menu' className='d-flex menu-styles'>
                        <MenuItem label='Home' to='/' />
                        <MenuItem label='About' to='/about' />
                        <MenuItem label='News' to='/news' />
                        <MenuItem label='Events' to='/events' />
                        <MenuItem label='Contact' to='/contact' />
                        <MenuItem label='Donate' to='/shop' />
                        {/* <li className='menu-item-styles'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='menu-item-styles'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='menu-item-styles'>
                            <Link to='/news'>News</Link>
                        </li>
                        <li className='menu-item-styles'>
                            <Link to='/events'>Events</Link>
                        </li>
                        <li className='menu-item-styles'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className='menu-item-styles'>
                            <Link to='/shop'>Donate</Link>
                        </li> */}
                    </ul>

                </div>
            </div>
            {/* <div className='grad1 mt-1'></div> */}
        </>
    )
}

export default Header