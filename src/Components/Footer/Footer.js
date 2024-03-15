import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import printrest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt="footerlogo"/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icons'>
        <div className='footer-icon-container'>
          <img src={instagram_icon} alt="instagramicon"/>
        </div>
        <div className='footer-icon-container'>
          <img src={printrest_icon} alt="instagramicon"/>
        </div>
        <div className='footer-icon-container'>
          <img src={whatsapp_icon} alt="instagramicon"/>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}
