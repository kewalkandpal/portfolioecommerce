import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull from '../assets/star_dull_icon.png';
import {useDispatch} from 'react-redux';
import { addToCart } from '../redux/reducer';

function ProductDisplay({product}){
    const dispatch = useDispatch();  
    
    const addProduct = (product)=>{
            dispatch(addToCart(product));
    };

    return(
        <div className='product_display'>
            <div className='display_left'>
                <div className='img_list'>
                    <img src={product.image} alt='product_img' />
                    <img src={product.image} alt='product_img' />
                    <img src={product.image} alt='product_img' />
                    <img src={product.image} alt='product_img' />
                </div>
                <div className='display_img'>
                    <img src={product.image} alt='product_img' />
                </div>
            </div>
            <div className='display_right'>
                <h1>{product.name}</h1>
                <div className='display_star'>
                        <img src={star_icon} alt='star_icon' />
                        <img src={star_icon} alt='star_icon' />
                        <img src={star_icon} alt='star_icon' />
                        <img src={star_icon} alt='star_icon' />
                        <img src={star_dull} alt='star_icon' />
                        <p>122</p>
                </div>
                <div className='product_prices'>
                    <div className="old_price">{product.old_price}</div>
                    <div className="new_price">{product.new_price}</div>
                </div>
                <div className="product_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam magnam a natus harum. Aliquid, hic est facilis quasi impedit nihil aperiam dolore asperiores eius exercitationem voluptatum eveniet ducimus possimus debitis corporis.                    
                </div>
                <div className="product_size">
                    <h1>Select Size</h1>
                    <div className='sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>addProduct(product)}>ADD TO CART</button>
                <p className='product_category'><span>Category : </span>{product.category} , T-Shirt , Crop Top</p>
                <p className='product_category'><span>Tags : </span>Modern , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay;