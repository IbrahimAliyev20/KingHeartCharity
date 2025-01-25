import React from 'react'
import '../css/Content1.css'
import Carousel from './Carousel'
import hands from '../image/hands.png'
import heart from '../image/heart.png'
import receive from '../image/receive.png'
import scholarship from '../image/scholarship.png'
import { Link } from 'react-router-dom'
const slides = [
  "https://i.imgur.com/wTcAemG.png",
  "https://i.imgur.com/i0sHln5.png",
  "https://i.imgur.com/nHHwsJ8.png"
]

function Content1() {
  return (
    <div>
      <div className='carusel'>
        <Carousel>
          {slides.map((s, index) => (
            <img src={s} key={index} className=' sekil1' alt={`slide-${index}`} />
          ))}
        </Carousel>
      </div>
      <div className='welcome'>
        <div className='welc'>
          Welcome to Kind Heart Charity
        </div>
        <Link to="/App5">
        <div className='wel-cards'>
          <div><a href="#"><img src={hands} alt="hands" />Become a volunteer</a></div>
          <div><a href="#"><img src={heart} alt="earth" />Caring Earth</a></div>
          <div><a href="#"><img src={receive} alt="heart" />Make a Donation</a></div>
          <div><a href="#"><img src={scholarship} alt="program" />Scholarship Program</a></div>
        </div></Link>
      </div>
    </div>

  )
}

export default Content1