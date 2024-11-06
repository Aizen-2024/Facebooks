import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import friendsLogo from '../Assets/web/friends.png';
import homeLogo from '../Assets/web/home.png';
import profileLogo from '../Assets/web/profile.png';
import marketplaceLogo from '../Assets/web/marketplace.png';
import messengerLogo from '../Assets/web/messenger.png';
import notificationLogo from '../Assets/web/notification.png';
import facebookLogo from '../Assets/web/icons8-facebook-color-120.png';
import MarketplacePage from './Pages/Marketplace';

export function NavBar() {
    return (
        <>
            <div className='Navbar_container'>
                <div id='logo'><img src={facebookLogo}/></div>
                <nav id='nav_bar'>
                    <Link to={'/home'}><img src={homeLogo}/></Link>
                    <Link to={'friends_page'}><img src={friendsLogo}/></Link>
                    <Link to={'marketplace_page'}><img src={marketplaceLogo}/></Link>
                    <Link to={'messenger_page'}><img src={messengerLogo}/></Link>
                    <Link to={'notification_page'}><img src={notificationLogo}/></Link>
                    <Link to={'profile_page'}><img src={profileLogo}/></Link>
                </nav>
            </div>
            <div className="page-content">
                <Outlet/>
            </div>
        </>
    );
}