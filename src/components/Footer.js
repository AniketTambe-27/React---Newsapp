import React from 'react'
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer className="footer"><hr/>
    <div className="line">
<div className="first"> 
  <h2>About Us</h2>
  <p>This Newsapp project gives Latest New of America Everyday with time ,topics,dates and Reported By Company name. This Newsapp project has Mobile view.</p>

</div>
<div className="first">
  <h2>Quick Links</h2>
  <ul>
      <li><Link href="#"><i class="fa fa-angle-right"></i> Subscription </Link></li>
      <li><Link href="#"><i class="fa fa-angle-right"></i> Contact </Link></li>
      <li><Link href="#"><i class="fa fa-angle-right"></i> Bug report</Link></li>
  </ul>
</div>
<div className="first">
  <h2>Connect with Us</h2>
 <ul className="second">
  <li><Link href="#"><i class="fa fa-facebook"></i></Link></li>
  <li><Link href="#"><i class="fa fa-instagram"></i></Link></li>
  <li><Link href="#"><i class="fa fa-twitter"></i></Link></li>
  <li><Link href="#"><i class="fa fa-github"></i></Link></li>
</ul>
</div>
      </div>
     <div className="fourth">
      <p>CopyRight &copy;2025 All Right Reserved || Aniket</p>
     </div>
     </footer>
     </>
  )
}

export default Footer
