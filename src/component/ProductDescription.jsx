import './ProductDescription.css';

function ProductDescription(){
    return(
        <div className='description'>
            <div className='description_btns'>
                <button>Description</button>
                <button>Review</button>
            </div>
            <div className='description_text'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis placeat. Quam rerum omnis a culpa quas architecto eligendi accusamus vel inventore consectetur, veniam commodi rem quis nemo minus eaque officia aspernatur expedita quos soluta odio veritatis voluptatem asperiores? Amet obcaecati animi nesciunt sed eveniet nisi, tempora natus omnis distinctio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum repudiandae explicabo voluptatum a enim laboriosam quas ad reiciendis sapiente.</p>
            </div>
        </div>
    )
}

export default ProductDescription;