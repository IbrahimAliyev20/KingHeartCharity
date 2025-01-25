import React from 'react'
import '../css/content3.css'
import qaraqadin from '..//image/qaramuelime.jpg'
import kitaybebe from '..//image/kitaybebeler.jpg'
import krant from '..//image/krant.jpg'
import { Link } from "react-router-dom"

function Content3() {
    return (
        <div>
            <div className='ourcaus' id='causes'>
                <h1 className='ourtext'>Our Causes</h1>
                <div className='ourcards'>
                    <div className='divclas'>
                        <img src={qaraqadin} alt="" />
                        <div className='cardstext'>
                            <h3>Children Education</h3><br />
                            <h5>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</h5>
                        </div>
                        <div className='cubux'><div className='ici'></div></div>
                        <div className='ourdolar'>
                            <div><b>Raised</b>: $18,500</div>
                            <div><b>Goal</b>: $32,000</div>
                        </div>
                        <Link to="/app4"><div className='ourdonate'><a href="#">Donate now</a></div></Link>
                    </div>
                    <div className='divclas'>
                        <img src={kitaybebe} alt="" />
                        <div className='cardstext'>
                            <h3>Children Education</h3><br />
                            <h5>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</h5>
                        </div>
                        <div className='cubux'><div className='ici'></div></div>
                        <div className='ourdolar'>
                            <div><b>Raised</b>: $18,500</div>
                            <div><b>Goal</b>: $32,000</div>
                        </div>
                        <Link to="/app4"> <div className='ourdonate'><a href="#">Donate now</a></div></Link>
                    </div>
                    <div className='divclas'>
                        <img src={krant} alt="" />
                        <div className='cardstext'>
                            <h3>Children Education</h3><br />
                            <h5>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</h5>
                        </div>
                        <div className='cubux'><div className='ici'></div></div>
                        <div className='ourdolar'>
                            <div><b>Raised</b>: $18,500</div>
                            <div><b>Goal</b>: $32,000</div>
                        </div>
                        <Link to="/app4"><div className='ourdonate'><a href="#">Donate now</a></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content3