import './Category.css';
import {useSelector} from 'react-redux';
import Items from '../component/Items';
import { useEffect, useState } from 'react';

function Category({banner,category}){
    const data = useSelector((data)=>data.product.product);
    const newData = [...data]
    const [filter, setFilter] = useState(newData);

    useEffect(()=>{
        setFilter([...filter.sort((a,b)=> {return a.new_price - b.new_price})]);
            
    },[]);
    function productFilter(e){
        if(e.target.value === "lower"){
            setFilter([...filter.sort((a,b)=> {return a.new_price - b.new_price})])
        }
        if(e.target.value === "high"){
            setFilter([...filter.sort((a,b)=> {return b.new_price - a.new_price})])
        }
    }

    return(
        <div className="category">
                <img src={banner} alt="category_banner" className='category_banner' />
                <div className='category_sort'>
                    <p>
                        <span>Showing 1-12</span> out of 36 products
                    </p>
                <div className='category_sort_icon'>
                    <p>Sort by Price</p>
                    <select onChange={(e)=> productFilter(e)}>
                        <option value={"lower"}>Lower to high</option>
                        <option value={"high"}>High to lower</option>
                    </select>
                </div>
                </div>
            <div className="category_items">
                {
                    filter?.map((item)=>{
                        if(item.category === category){
                            return(
                                <Items key={item.id} {...item} />
                            )
                        }else{
                            return null;
                        }
                    })
                }
            </div>
            <div className='category_more'>
                Explore More
            </div>
        </div>
    )
}

export default Category;