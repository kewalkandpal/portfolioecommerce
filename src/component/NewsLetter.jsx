import './NewsLetter.css';

function NewsLetter(){
    return(
        <div className='news_letter'>
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subscribe Our Newsletter And Stay Updated</p>
            <div className='input_box'>
                <input type='email' placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;