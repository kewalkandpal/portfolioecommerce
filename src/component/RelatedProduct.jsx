import './RelatedProduct.css';
import Item from './Items';

function RelatedProduct({data,id,item}){

    const relatedProduct = data?.filter((cur)=> cur.id !== +id && cur.category === item.category);

    return(
        <div className="releated_product">
            <h1>Related Product</h1>
            <hr />
            <div className='Product_item'>
                {
                    relatedProduct?.map((item)=>{
                        return(
                            <Item key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProduct;