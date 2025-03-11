import './Navbar.css'
import nav_logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import {Link, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const togRef = useRef(null);
    const {pathname} = useLocation();
    const totalProduct = useSelector((cart)=>cart.product.cart.length);
    
    useEffect(()=>{
        function handelTriger(e){
            if(!menuRef.current.contains(e.target) && !togRef.current.contains(e.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handelTriger)

        return ()=>{
            document.removeEventListener("mousedown", handelTriger);
        }

    },[isOpen]);

    return(
        <div className='navbar'>
            <div className='nav_logo'>
                <Link to={'/'}>
                <img src={nav_logo} alt='nav_logo' className='nav_logo_img' />
                </Link>
                <Link to={'/'}>
                <p className='nav_logo_name'>Shoping Point</p>
                </Link>
            </div>
            <ul className={`nav_menu ${isOpen ? "active" : "deActive"}`} ref={menuRef} >
            <li className='nav_link'><Link to={'/'}>Shop{pathname === '/' ? <hr /> : ""}</Link></li>
                <li className='nav_link'><Link to={'/men'}>Men{pathname === '/men' ? <hr /> : ""}</Link></li>
                <li className='nav_link'><Link to={'/women'}>Women{pathname === '/women' ? <hr /> : ""}</Link></li>
                <li className='nav_link'><Link to={'/kids'}>Kids{pathname === '/kids' ? <hr /> : ""}</Link></li>
            </ul>
            <div className='cart_wrapper'>
                <Link to={'/loginSign'}><button className='nav_login_btn'>Login</button></Link>
                <div className='cart_icon'>
                <Link to={'/cart'}><img src={cart_icon} alt='cart_icon' className='cart_icon_img'/></Link>
                <p className='cart_total'>{totalProduct}</p>
                </div>
                <button className='humbergar' ref={togRef} onClick={()=> setIsOpen(!isOpen)}>{"|||"}</button>
            </div>
        </div>
    )
}

export default Navbar;