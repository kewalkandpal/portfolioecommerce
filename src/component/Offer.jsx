import './Offer.css';
import exclusive_img from '../assets/exclusive_image.png';

function Offer(){
    return(
        <div className="offer">
            <div className='offer_left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className='offer_right'>
                <img src={exclusive_img} alt='offer_right_img' />
            </div>
        </div>
    )
}

export default Offer;