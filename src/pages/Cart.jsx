import './Cart.css';
import {useSelector} from 'react-redux';
import remove_icon from '../assets/cart_cross_icon.png';
import { useDispatch } from 'react-redux';
import { productQuantityIncrement, productQuantityDecrement, removeFromCart } from '../redux/reducer';

function Cart(){

    const dispatch = useDispatch();
    const cart_product = useSelector((product)=>product.product.cart);

    const amount = cart_product.reduce((total,cur)=> total += (cur.quantity * cur.new_price),0);

    if(cart_product.length <= 0){
        return <p className='cart_msg'>You don't have any product</p>
    }
    return(
        <div className='cart'>
            <div className='cart_heading'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                cart_product?.map((product)=>{
                    return(
                        <div className='cart_items' key={product.id}>
                            <img className='cart_img' src={product.image} alt='cart_image'/>
                            <p className='product_name'>{product.name}</p>
                            <p className='product_price'>{product.new_price}</p>
                            <div className='cart_action'>
                                <p className='cart_decrement' onClick={()=>dispatch(productQuantityDecrement(product.id))}>-</p>
                                <p>{product.quantity}</p>
                                <p className='cart_increment' onClick={()=>dispatch(productQuantityIncrement(product.id))}>+</p>
                            </div>
                            <p>{product.quantity * product.new_price}</p>
                            <img className='remove_icon' src={remove_icon} alt='remove_icon' onClick={()=> dispatch(removeFromCart(product.id))}/>
                        </div>
                    )
                })
            }
            <div className="cart_total">
                <div className='total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="total_items">
                            <p>Subtotal</p>
                            <p>{amount}</p>
                        </div>
                        <hr />
                        <div className="total_items">
                            <p>Shiping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="total_items">
                            <h3>Total</h3>
                            <h3>{amount}</h3>
                        </div>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className='cart_promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cart_promobox'>
                        <input type='text' placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;