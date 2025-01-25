import React from 'react'
import '../css/content5.css'
import BirinciCard from './BirinciCard';
import IkinciCard from './IkinciCard';
import SearchHisse from './SearchHisse';

function Content5() {
    return (
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
    )
}


export default Content5
