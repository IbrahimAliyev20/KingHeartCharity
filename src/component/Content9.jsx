import React from 'react'
import '../css/content9.css'
import BirinciCard from './BirinciCard'
import IkinciCard from './IkinciCard'
import SearchHisse from './SearchHisse'
import qarahekim from '../image/qarahekim.jpg'
import hekimler from '../image/hekimler.jpg'
import musteri4 from '../../public/images/musteri4.jpg'
import musteri3 from '../../public/images/musteri3.jpg'
import musteri2 from '../../public/images/musteri2.jpg'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
import { MdOutlineLocalPostOffice } from "react-icons/md";

function Content9() {
  return (
    <div className='newlisting-cont'>
      <div className='fotobackground'>News Detail</div>
      <div className='conteinr-latest' id='news'>
        <h1>Latest News</h1>
        <div className='obsihisse'>
          <div className='saghisse'>
            <BirinciCard />
            <div className='birincicard-ardi'>
              <div className='dirnaq-text'>
                <h3>"</h3>
                <h4>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci</h4>
              </div>
              <div className='ikili-sekil'>
                <img src={qarahekim} alt="doctor" />
                <img src={hekimler} alt="doctors" />
              </div>
              <h5>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</h5>
              <br />
              <hr />
              <div className='donat-links'>
                <div className='donat'>
                  <a href="#">Donation</a>
                  <a href="#">Clothing</a>
                  <a href="#">Food</a>
                </div>
                <div className='link-deatils'>
                  <FaFacebook className='fa' />
                  <FaTwitter className='fa' />
                  <IoIosPrint className='fa' />
                  <MdOutlineLocalPostOffice className='fa' />
                </div>
              </div>

              <div className='comment-pers'>
                <div className='jack-com'>
                  <img src={musteri4} alt="musteri" />
                  <div className='jack-text'>
                    <h4>Jack</h4>
                    <p>Kind Heart Charity is the most supportive organization. This is Bootstrap 5 HTML CSS template for everyone. Thank you.</p>
                    <div className='like-reply'>
                      <p>Like</p>
                      <p>Reply</p>
                    </div>
                  </div>
                </div>
                <div className='daisy-com'>
                  <img src={musteri3} alt="musteri" />
                  <div className='jack-text'>
                    <h4>Daisy</h4>
                    <p>Kind Heart Charity is the most supportive organization. This is Bootstrap 5 HTML CSS template for everyone. Thank you.</p>
                    <div className='like-reply'>
                      <p>Like</p>
                      <p>Reply</p>
                    </div>
                  </div>
                </div>
                <div className='wilson-com'>
                  <img src={musteri2} alt="musteri" />
                  <div className='jack-text'>
                    <h4>Wilson</h4>
                    <p>Kind Heart Charity is the most supportive organization. This is Bootstrap 5 HTML CSS template for everyone. Thank you.</p>
                    <div className='like-reply'>
                      <p>Like</p>
                      <p>Reply</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className='write-comment'>
                <h2>Write a comment</h2>
                <textarea className='coment-listng' cols="7" rows="3" placeholder='Your comment here'></textarea>
                <div className='coment-buton'><button>Comment</button></div>
              </div>
            </div>
          </div>
          <br />
          <div className='solhisse'>
            <SearchHisse />
          </div>
        </div>
        <div className='related-news-'>
          <div className='related-news2'>
            <h4>Related News</h4>
            <div className='listing-footer'>
              <BirinciCard />
              <IkinciCard />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Content9