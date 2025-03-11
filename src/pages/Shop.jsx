import Hero from "../component/Hero";
import NewCollections from "../component/NewCollections";
import NewsLetter from "../component/NewsLetter";
import Offer from "../component/Offer";
import Popular from "../component/Popular";

function Shop(){
    return(
        <div>
            <Hero />
            <Popular />
            <Offer />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop;