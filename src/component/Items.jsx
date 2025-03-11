import './Items.css';
import {Link} from 'react-router-dom';

function Items({id,name,image,new_price,old_price}){
    return(
        <div className='items'>
            <div className='items_image'>
            <Link to={`/product/${id}`}><img src={image} alt='item_img' className='item_img' onClick={window.scrollTo(0,0)} /></Link>
            </div>
            <p className='item_name'>{name}</p>
            <div className='item_description'>
                <div className='item_price_new'>
                    {new_price}
                </div>
                <div className='item_price_old'>
                    {old_price}
                </div>
            </div>
        </div>
    )
}

export default Items;