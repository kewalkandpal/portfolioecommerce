import './Popular.css';
import data_product from '../assets/data';
import Items from './Items';

function Popular(){
    return(
        <div className="popular">
            <h1>Special In Womens</h1>
            <hr />
            <div className='popular_items'>
            {
                data_product?.map((item)=>{
                    return(
                        <Items key={item.id} {...item} />
                    )
                })
            }
            </div>
        </div>
    )
};

export default Popular;