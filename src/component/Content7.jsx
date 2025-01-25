import React from 'react'
import gulen from '../image/gulenqiz.jpg'
import '../css/content7.css'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

function Content7() {
  return (
    <div className='contnet7-conteinr' id='contact'>
      <div className='clara'>
        <h1>Get in touch</h1>
        <div className='clara-barton'>
          <img src={gulen} alt="smile" />
          <div className='text-clara'>
            <p>Clara Barton</p>
            <p>HR & Office Manager</p>
          </div>
        </div>
        <div className='information-cont7'>
          <h3>Contact information</h3>
          <p><IoLocationOutline /> Akershusstranda 20, 0150 Oslo, Norway</p>
          <p><LuPhone /> <a href="tel:120-240-9600">120-240-9600</a></p>
          <p><MdOutlineLocalPostOffice /> <a href="mailto:donate@charity.org">donate@charity.org</a></p>
          <button>Get Direction</button>
        </div>
      </div>
      <div className='form-cont7'>
        <form>
          <h2>Contact form</h2>
          <h6>Or, you can just send an email: info@charity.org</h6>
          <input type="text" placeholder='Jack' />
          <input type="text" placeholder='Doe' />
          <input type="email" name="mail" id="1" placeholder='Jackdoe@gmail.com' />
          <textarea placeholder='What can we help you?'
            rows="5" cols="30" />
          <button>Send Message</button>
        </form>

      </div>
    </div>
  )
}

export default Content7