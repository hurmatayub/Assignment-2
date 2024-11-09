import React from "react";
import { FiTwitter, FiGlobe, FiYoutube, FiInstagram, FiFacebook } from "react-icons/fi";
import './Footer.css';

const socialLinks = [
 { id: 1, icon: <FiGlobe />, url: "https://www.stoman.me/" },
 { id: 2, icon: <FiInstagram />, url: "https://instagram.com/" },
 { id: 3, icon: <FiTwitter />, url: "https://twitter.com/" },
 { id: 4, icon: <FiFacebook />, url: "https://Facebook.com/" },
 { id: 5, icon: <FiYoutube />, url: "https://www.youtube.com/c/" },
];

const paymentMethods = [
 { id: 1, name: "Visa", icon: "/images/V.png" },
 { id: 2, name: "MasterCard", icon: "/images/M.png" },
 { id: 3, name: "PayPal", icon: "/images/E.png" },
 { id: 4, name: "PayPal", icon: "/images/J.png" },
 { id: 5, name: "PayPal", icon: "/images/bh.png" },
 { id: 6, name: "PayPal", icon: "/images/C.png" },
];
 
const Footer = () => {
 return (
   <footer className="footer">
     <div className="footer-top">
       <div className="footer-column">
         <h3>COMPANY DETAILS</h3>
        
         <ul>
           <li><a href="/about">About Us</a></li>
           <li><a href="/careers">Careers</a></li>
           <li><a href="/terms">Terms of Service</a></li>
           <li><a href="/privacy">Privacy Policy</a></li>
         </ul>
       </div>

       <div className="footer-column">
         <h3>CONTACT DETAILS</h3>
         <ul>
           <li><a href="mailto:info@yourcompany.com">Email: info@yourcompany.com</a></li>
           <li><a href="tel:+1234567890">Phone: +1234567890</a></li>
           <li><a href="/contact">Contact Form</a></li>
         </ul>
       </div>

       <div className="footer-column">
         <h3>BLOG</h3>
         <ul>
           <li><a href="/blog/post1">Latest News</a></li>
           <li><a href="/blog/post2">Tips & Guides</a></li>
           <li><a href="/blog/post3">Industry Insights</a></li>
         </ul>
       </div>

       <div className="footer-column">
         <h3>CUSTOMER SERVICES</h3>
         <ul>
           <li><a href="/faq">FAQ</a></li>
           <li><a href="/support">Support</a></li>
           <li><a href="/returns">Returns & Refunds</a></li>
         </ul>
       </div>
     </div>

     <div className="footer-content">
       <h2>FOLLOW US</h2>
       <ul className="social-links">
         {socialLinks.map((link) => (
           <li key={link.id}>
             <a href={link.url} target="_blank" rel="noopener noreferrer">
               {link.icon}
             </a>
           </li>
         ))}
       </ul>

       <h2>PAYMENT METHODS</h2>
       <ul className="payment-methods">
         {paymentMethods.map((method) => (
           <li key={method.id}>
             <img src={method.icon} alt={method.name} />
           </li>
         ))}
       </ul>

       <div className="footer-info">
         <p>&copy; 2024 Your Company. All rights reserved.</p>
         <p>Contact: info@yourcompany.com</p>
       </div>
     </div>
   </footer>
 );
};

export default Footer;