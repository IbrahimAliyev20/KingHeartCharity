import React from 'react'
import '..//css/content2.css'
import people from '../image/people.jpg'
import qadin from '../image/qadin.jpg'
import { AiOutlineCheck } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function Content2() {
    return (
        <div>
            <div className='content2' id='about'>
                <div className='cont2photo'>
                    <img src={people} alt="" />
                </div>
                <div className='cont2text' >
                    <div className='ourstory'>
                        <h1>Our Story</h1>
                        <h3>Kind Heart Charity, Non-Profit Organization</h3>
                        <h6>This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you. HTML CSS files updated on 20 Oct 2022.</h6>
                    </div>
                    <div className='ourmision'>
                        <div className='ourmision1'>
                            <h1>Our Mission</h1>
                            <h5>Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus</h5>
                            <h5><AiOutlineCheck /> Charity Theme</h5>
                            <h5><AiOutlineCheck /> Semantic HTML</h5>
                        </div>
                        <div className='ourmision2'>
                            <h1>2009</h1>
                            <h5>Founded</h5>
                            <br />
                            <h1>120B</h1>
                            <h5>Donations</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sandy'>
                <div className='sandyphoto'><img src={qadin} alt="women" /></div>
                <div className='sandytext'>
                    <h1>Sandy Chan</h1>
                    <h5>Co-Founding Partner</h5>
                    <br />
                    <h5>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</h5>
                    <br />
                    <h5>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</h5>
                    <br />
                    <div className='foot-links'>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                    <br />
                </div>

            </div>
        
            <div className='savelives'>
                <div className='make'>
                <h1>Make an impact.</h1>
                    <h1>Save lives.</h1></div>
                <div className='makebecom'>
                    <a>Make a donation</a>
                    <a>Become a volunteer</a>
                </div>
                <div className='balonmake'></div>
            </div>
        </div>

    )
}

export default Content2