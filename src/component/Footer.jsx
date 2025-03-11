import './Footer.css';
import footer_logo from '../assets/logo_big.png';
import insta from '../assets/instagram_icon.png';
import pinta from '../assets/pintester_icon.png';
import whatsA from '../assets/whatsapp_icon.png';

function Footer(){
    return(
        <div className='footer'>
            <div className="footer_logo">
                <img src={footer_logo} alt='footer_logo' />
                <p>Shoping Point</p>
            </div>
            <ul className="footer_link">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer_icon">
                <div className="icon">
                    <img src={insta} alt='icon' />
                </div>
                <div className="icon">
                    <img src={whatsA} alt='icon' />
                </div>
                <div className="icon">
                    <img src={pinta} alt='icon' />
                </div>
            </div>
            <div className="copy_right">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;