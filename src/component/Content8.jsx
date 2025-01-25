import React from 'react'
import '../css/content8.css'
import BirinciCard from './BirinciCard'
import IkinciCard from './IkinciCard'
import SearchHisse from './SearchHisse'
function Content8() {
  return (
    <div className='newlisting-cont'>
      <div className='fotobackground'>News Listing</div>
      <div className='conteinr-latest' id='news'>
        <h1>Latest News</h1>
        <div className='obsihisse'>
          <div className='saghisse'>
            <BirinciCard />
            <IkinciCard />
          </div>
          <br />
          <div className='solhisse'>
            <SearchHisse />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content8