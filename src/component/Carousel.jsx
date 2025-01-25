import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import '../css/carousel.css'
function Carousel({ children: slides }) {
    const [deyis, setDeyis] = useState(0)

    const evvel = () =>
        setDeyis((deyis) => (deyis == 0 ? slides.length - 1 : deyis - 1))


    const sonra = () =>
        setDeyis((deyis) => (deyis == slides.length - 1 ? 0 : deyis + 1))

    return (
        <div className='overflow-hidden relative slides '>
            <div className='flex transition-transform ease-out 
            duration-500' style={{ transform: `translateX(-${deyis * 100}%` }}  >{slides}</div>
            <div className='absolute inset-0 flex items-center 
        justify-between p-4'>
                <button onClick={evvel} className='butonbg'>
                    <FaChevronLeft size={40} />
                </button>
                <button onClick={sonra} className='butonbg'>
                    <FaChevronRight size={40} />
                </button>
            </div>
        </div>

    )
}

export default Carousel