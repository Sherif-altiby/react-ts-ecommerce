import './Footer.scss'
import logoImg from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer>
         <ul>
            <li> <img src={logoImg} alt="" /> </li>
            <li>Address: 60-49 Road 11378</li>
            <li>Almansoura</li>
            <li>Phone: +20 1017143343</li>
            <li>Email: sherifahmed852002@gmail.com</li>
         </ul>
         <ul>
            <li> <h2>Useful Links</h2> </li>
            <li> <Link to = "/"> Home </Link></li>
            <li> <Link to = "/shop"> Shop </Link></li>
            <li>Pages</li>
            <li> <Link to = "/blog"> Blog </Link></li>
            <li> <Link to = "/contact"> Contact </Link></li>
         </ul>
         <ul>
            <li><h2>Join Our Newsletter Now</h2></li>
            <li>Get E-mail updates about our latest shop and special offers.</li>
            <li>
                <div className="input_email">
                    <input type="text" placeholder='Enter Your Email' />
                    <div className="btn"> subscribe </div>
                </div>
            </li>
            <li className="icons">
                <div className="icon"> <i className="fa-brands fa-facebook-f"></i> </div>
                <div className="icon"> <i className="fa-brands fa-instagram"></i> </div>
                <div className="icon"> <i className="fa-brands fa-x-twitter"></i></div>
                <div className="icon"> <i className="fa-brands fa-youtube"></i> </div>
            </li>
         </ul>
    </footer>
  )
}

export default Footer