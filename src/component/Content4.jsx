import React from 'react'
import '../css/content4.css'
import qivirciq from '../image/qivirciq.jpg'

const VolunterForm = () => {
  return (
    <div className='form-conteinr'>
      <h2>Become a volunteer today</h2>
      <form className='volunterform'>
        <div className='formgroup'>
          <input type="text" placeholder='Jack Doe' />
          <input type="email" placeholder='Jackdoe@gmail.com' />
        </div>
        <div className='formgroup'>
          <input type="text" placeholder='Subject' />
          <input type="text" placeholder='Upload your CV' />
        </div>
        <div className='formgroup'>
          <textarea className='textjack' placeholder="Comment (Optional)" rows="5"></textarea>
        </div>
        <button type="submit" className="Comment (Optional)">Submit</button>
      </form>
    </div>
  );
};

const Volunterimg = () => {
  return (
    <div className='volunter-img'>
      <img src={qivirciq} alt="#" />
      <div>
        <h3>About Volunteering</h3>
        <p>Lorem Ipsum dolor sit amet, consectetur adipisicing kengan omeg kohm tokito. Professional charity theme based.</p>
      </div>
    </div>
  )
}


function Content4() {
  return (
    <div className='voluntersection' id='volunteer'>
      <VolunterForm />
      <Volunterimg />
    </div>
  )
}

export default Content4