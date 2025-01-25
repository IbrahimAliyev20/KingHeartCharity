import React from 'react'
import '../css/footer.css'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from "../image/logo.png";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


function Footer() {
    return (
        <div className='footer-conteinr'>
            <div className='footer-1'>
                <div className='logo'>
                    <a href="#"><img src={logo} alt="Logo" style={{ width: '90px', height: 'auto' }} /></a>
                </div>
                <div className='quick-links'>
                    <h1>Quick Links</h1>
                    <div className='quicks'>
                        <div className='quick-1'>
                            <p><a href="">Our Story</a></p>
                            <p><a href="">Newstroom</a></p>
                            <p><a href="">Causes</a></p>
                        </div>
                        <div className='quick-2'>
                            <p><a href="">Become a volunteer</a></p>
                            <p><a href="">Partner with us</a></p>

                        </div>
                    </div>
                </div>
                <div className='contact'>
                    <h1>Contact Infomation</h1>
                    <p><LuPhone /> <a href="tel:120-240-9600">120-240-9600</a></p>
                    <p><MdOutlineLocalPostOffice /> <a href="mailto:donate@charity.org">donate@charity.org</a></p>
                    <p><IoLocationOutline /> Akershusstranda 20, 0150 Oslo, Norway</p>
                    <p className='getdirection'><a href="#">Get Direction</a></p>

                </div>
            </div>



            {/* footer-2ci hissə */}
            <div className='footer-2'>
                <div className='foot-copy'>
                    <p>Copyright © 2036 Kind Heart Charity Org. Design: <a href="https://templatemo.com/" target="_blank">TemplateMo</a></p>
                </div>
                <div className='foot-links'>
                    <a href="#" className='fl-3'><FaTwitter /></a>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaWhatsapp /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer