import React from "react";
import { Link } from 'react-router-dom';
import '../Footer/Footer.scss'
import fb from '../../assets/Icons/fb.svg'
import insta from '../../assets/Icons/insta.svg'
import tweet from '../../assets/Icons/tweet.svg'



function Footer(){
    return(<>
       <div className="footer">
        <div className="footer-icons">
            <p className="footer-icons__para">
            Our socials
            </p>
            <div className="footer-icons__iconlist">
            <a   href="https://www.facebook.com/"><img className="footer-icons--stylemod" src={fb} alt="facebook icon" /></a>
            <a  href="https://www.instagram.com/"><img  className="footer-icons--stylemod" src={insta} alt="instagram icon" /></a>
            <a  href="https://twitter.com/"><img  className="footer-icons--stylemod" src={tweet} alt="twitter icon" /></a>
        </div>
        </div>
        <div className="footer-redirects">
            <ul>Resources
            <Link to="/blogs"><li>Blogs</li></Link>
            <Link to="/contact"><li>Contact us</li></Link>
            <Link to="/suggestion"><li>Suggestion Box</li></Link>
            <Link to="/privacy"><li>Privacy</li></Link>
            </ul>

        </div>
        <div className="footer-para">
       <p className="footer-para_copyright">Copyright © 2023 Eco Redefine</p>
         </div>
        
       </div>
   </> )
}
export default Footer;