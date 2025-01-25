import React from 'react'
import '../css/content10.css'
import { TbCreditCard } from "react-icons/tb";
import { PiPaypalLogoBold } from "react-icons/pi";


function Donate() {
  return (
    <div className='donate-son'>
      <div className='form-donate'>
        <form>
          <h3>Make a donation</h3>
          <h4>Donation Frequency</h4>
          <div className='one-month'><button>One Time</button><button>Monthly</button></div>
          <h4>Select an amount</h4>
          <div className='buton1'><button>$10</button> <button>$15</button></div>
          <div className='buton1'><button>$20</button> <button>$30</button></div>
          <div className='buton1'><button>$45</button> <button>$50</button></div>
          <div className='custom-amo'><div className='dolar-isare'>$</div><input type="text" placeholder='Custom amount' /></div>
          <h4>Personal Info</h4>
          <p className='inpt-son'> <input type="text" placeholder='Jack Doe' /></p>
          <p className='inpt-son'> <input type='email' placeholder='Jackdoe@gmail.com' /></p>
          <h4>Choose Payment</h4>
          <div className='radio-inpt'>
            <p><input type="radio" checked /><TbCreditCard /> Debit or Credit card </p>
            <p><input type="radio" /><PiPaypalLogoBold /> Paypal </p>
          </div>
          <button className='submit-last'>Submit Donation</button>
        </form>
      </div>
    </div>
  )
}

export default Donate