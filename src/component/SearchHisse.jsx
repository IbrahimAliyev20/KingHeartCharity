import React from 'react'
import '../css/content5.css'
import { CiCalendar } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import hekimler from '../image/hekimler.jpg'
import qarahekim from '../image/qarahekim.jpg'

function SearchHisse() {
    return (
        <div className='card2-latest'>
            <div className='search-hisse'>
                <div className='search-lupa'>
                    <input type="text" placeholder='Search' /><IoSearchOutline className='lupa' />
                </div>
                <br />
                <h4>Recent news</h4>
                <br />
                <div className='recent-news'>
                    <div className='recent-card'>
                        <img src={qarahekim} alt="doctor" />
                        <div className='text-recent-card'>
                            <p>Food donation area</p>
                            <p><CiCalendar /> October 12, 2036</p>
                        </div>
                    </div>
                    <div className='recent-card2'>
                        <img src={hekimler} alt="doctor" />
                        <div className='text-recent-card'>
                            <p>Food donation area</p>
                            <p><CiCalendar /> October 12, 2036</p>
                        </div>
                    </div>
                </div>
                <br />
                <div className='categories-latest'>
                    <h3 className='color-blue'>Categories</h3>
                    <br />
                    <p>Driking water <a href="#">20</a></p>
                    <p>Food Donation <a href="#">30</a></p>
                    <p>Children Education <a href="#">10</a></p>
                    <p>Poverty Developmnet <a href="#">15</a></p>
                    <p>Clothing Donation <a href="#">20</a></p>
                </div>
                <br />
                <div className='tags-latest'>
                    <h3 className='color-blue'> Tags</h3>
                    <div className='tags-a'>
                        <p >Donation</p>
                        <p >Clothing</p>
                        <p >Food</p>
                        <p >Children</p>
                        <p >Education</p>
                        <p >Poverty</p>
                        <p >Clean Water</p>
                    </div>
                </div>
                <br />
                <form className='newsletter-form'>
                    <h3 className='color-blue'>Newsletter Form</h3>
                    <input type="mail" placeholder='Email Address' />
                    <button>Subscribe</button>

                </form>

            </div>
        </div>
    )
}

export default SearchHisse