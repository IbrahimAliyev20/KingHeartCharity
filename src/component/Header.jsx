import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../css/header.css";
import logo from "../image/logo.png";
import { Link } from "react-router-dom"

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='conteinr1'>
      <div className='adres-links'>
        <div className='adres'>
          <p style={{ marginRight: "30px" }}><IoLocationOutline /> Akershusstranda 20, 0150 Oslo, Norway</p>
          <p><MdOutlineLocalPostOffice />
            <a href="mailto:info@company.com" style={{ marginLeft: "5px", textDecoration: 'none', color: 'white' }}> info@company.com </a></p>
        </div>
        <div className='links'>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
      <div className='logo-pages'>
        <div className='logo'>
          <Link to="/"><a href="#"><img src={logo} alt="Logo" style={{ width: '90px', height: 'auto' }} />
            <div>
              <p>Kind Heart Charity</p>
              <p>NON-PROFIT ORGANIZATION</p>
            </div>
          </a></Link>
        </div>
        <div
          className={`hamburger-menu ${isActive ? 'active' : ''}`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className={`pages ${isActive ? 'active' : ''}`}>
          <ul style={{ listStyle: 'none' }}>
            <li><a href="/" style={{ color: '#7dcdbd' }}>Home</a></li>
            <li><a href='#about' className='colr'>About</a></li>
            <li><a href="#causes" className='colr'>Causes</a></li>
            <li><a href="#volunteer" className='colr'>Volunteer</a></li>
            <li className='news'>
              <a href="#news">News <MdOutlineKeyboardArrowDown /></a>
              <div className="dropdown">
                <a href="#"><Link to="/app2"> News Listing</Link></a>
                <a href="#"><Link to="/app3"> News Detail</Link></a>
              </div>
            </li>
            <li><a href="#contact" className='colr'>Contact</a></li>
            <Link to="/app4">  <li><a href="" className='donate'>Donate</a></li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
