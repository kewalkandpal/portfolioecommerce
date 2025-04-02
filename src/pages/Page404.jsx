import { Link } from 'react-router-dom';
import './Page404.css';

function Page404(){
    return(
        <div className="pageWrapper">
        <h1 className="pageHeading">Oops!</h1>
        <p className="pageContent">The Page You Are Looking For Cannot Be Found</p>
        <Link to='/'>
            <button className="pageBtn">GO TO HOMEPAGE</button>
        </Link>
    </div>
    )
}

export default Page404;