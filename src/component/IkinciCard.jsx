import React from 'react';
import { CiCalendar } from "react-icons/ci";
import { FaRegUser, FaRegCommentAlt } from "react-icons/fa";
import bigliqadin from '../image/bigliqadin.jpg'
import '../css/content5.css'


function IkinciCard() {
    return (
        <div className='card1-latest'>
            <div className='bigli'>
                <img src={bigliqadin} alt="womans" />
                <p>Lifestyle, Clothing Donation</p>
                <br />
                <div className='iconscards'>
                    <a><CiCalendar /> October 12, 2036</a>
                    <a><FaRegUser /> By Admin</a>
                    <a><FaRegCommentAlt /> 32 Comments</a>
                </div>
                <h1>Clothing donation to urban area</h1>
                <br />
                <h5>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based on Bootstrap</h5>
            </div>
        </div>
    )
}

export default IkinciCard