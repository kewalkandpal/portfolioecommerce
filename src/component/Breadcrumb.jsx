import './Breadcrumb.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

function Breadcrumb({product}){
    return(
        <div className="breadcrumb">
            <p>Home<img src={arrow_icon} alt='arrow_icon'/>Shop<img src={arrow_icon} alt='arrow_icon'/>{product.category}<img src={arrow_icon} alt='arrow_icon'/>{product.name}</p>
        </div>
    )
}

export default Breadcrumb;