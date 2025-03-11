import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
import Breadcrumb from "../component/Breadcrumb";
import ProductDisplay from "../component/ProductDisplay";
import ProductDescription from "../component/ProductDescription";
import RelatedProduct from "../component/RelatedProduct";

function Product(){
const data = useSelector((item)=>item.product.product);
const {id} = useParams();
const item = data.find((cur)=> cur.id === +id);

return(
        <div className='product'>
            <Breadcrumb product={item} />
            <ProductDisplay product={item} />
            <ProductDescription />
            <RelatedProduct data={data} id={id} item={item} />
        </div>
    )
}

export default Product;