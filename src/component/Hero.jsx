import './Hero.css';
import hero_image from '../assets/hero_image.png';
import hero_hand from '../assets/hand_icon.png';
import arrow_right from '../assets/arrow.png';

function Hero(){
    return(
        <div className='hero'>
            <div className='hero_left'>
                <p className='hero_left_text'>New Arrivals Only</p>
                <div className='hero_text'>
                <div className='hero_hand'>
                    <p className='hero_hand_text'>new</p>
                    <img src={hero_hand} alt='hero_hand'/>
                </div>
                     <p>collections</p>
                     <p>for everyone</p>
                </div>
                <div className='hero_btn'>
                    <p className='hero_btn_text'>Latest Collection</p>
                    <img src={arrow_right}  alt='hero_btn_arrow'/>
                </div>
            </div>
            <div className='hero_right'>
                <img src={hero_image} alt='hero_img' />
            </div>
        </div>
    )
};

export default Hero;