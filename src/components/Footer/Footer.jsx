import React from "react";
import '../Footer/Footer.scss'
import fb from '../../assets/Icons/fb.svg'
import insta from '../../assets/Icons/insta.svg'
import tweet from '../../assets/Icons/tweet.svg'


function Footer(){
    return(
       <div className="footer">
        <div className="footer-icons">
            <p className="footer-icons__para">
            Follow us on our socials
            </p>
            <div className="footer-icons__iconlist">
            <a   href="https://www.facebook.com/"><img className="footer-icons--stylemod" src={fb} alt="facebook icon" /></a>
            <a  href="https://www.instagram.com/"><img  className="footer-icons--stylemod" src={insta} alt="instagram icon" /></a>
            <a  href="https://twitter.com/"><img  className="footer-icons--stylemod" src={tweet} alt="twitter icon" /></a>
        </div>
        </div>
        <div className="footer-redirects">
            <ul>More</ul>

        </div>
       </div>
    )
}
export default Footer;