import React from 'react'
import './index.scss'
const Footer = () => {
  return (
    <>
      <section id='Footer'>
<div className="FooterArea">
  <div className="FooterAreaBox">
    <div className="FooterBox">
      <div className="EmailBox">
        <input type="text" placeholder=' Your Email'/>
        <button className='SendBtn'>Send</button>
      </div>
    </div>
    <div className="FooterBox">
      <ul>
        <h1>About</h1><br />
        <li>About Us</li><br />
        <li>Our Partners</li><br />
        <li>Our Services</li><br />
      </ul>
    </div>
    <div className="FooterBox">
      <ul>
        <h1>Contact</h1><br />
        <li>Contact Us</li><br />
        <li>FAQ Page</li><br />
        <li>About Me</li><br />
      </ul>
    </div>
    <div className="FooterBox">
      <h1>Follow Us</h1><br />
      <li>Contact Us</li><br />
        <li>FAQ Page</li><br />
        <li>About Me</li><br />
    </div>
  </div>
</div>
      </section>
    </>
  )
}

export default Footer
