import './NewCollections.css';
import new_collection from '../assets/new_collections';
import Items from './Items';

function NewCollections(){
    return(
        <div className="new_collection">
            <h1>New Collections</h1>
            <hr />
            <div className="collection">
                {
                    new_collection?.map((collection)=>{
                        return(
                            <Items key={collection.id} {...collection} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewCollections;