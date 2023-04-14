import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCoverflow} from 'swiper';
import Pictures from '../data/data';
import Sponsors from '../data/sponsor';
import Background from "../data/images/Rectangle 13.png";
import StarWhite from "../data/images/Star 1.png"
import Star from "../data/images/Star 2.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';



export default function Intro(){

    const pictures = Pictures.map(Picture => {
        return (
            <SwiperSlide>
                <img src={Picture.image} alt={Picture.alt}  />
            </SwiperSlide>
        )
    })

    const sponsors = Sponsors.map(Sponsor => {
        return (
            <SwiperSlide>
                <img src={Sponsor.image} alt={Sponsor.alt}  />
            </SwiperSlide>
        )
    })
    


    return (
        <div className="first-page">
            <p className="first-paragraph">
                Gain knowledge from <span>expert instructors</span> at your own pace, anytime and anywhere
            </p>
            <p className="second-paragraph">
                Unlock your potential with our engaging e-learning platform. Access high-quality courses anytime, anywhere and achieve your personal and professional goals with ease.
            </p>
            <button className="button">Start Learning</button>
            <Swiper
            modules={[A11y, Autoplay, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            autoplay={{delay: 2000}}
            slidesPerView={5}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 30,
                slideShadows: false,
                depth: -100,
                modifier: 1,
                stretch: 0
            }}
            >
                {pictures}
            </Swiper>
            <div className='star-up'>
                <div className='star-1'>
                    <img src={StarWhite} alt="Star..." />
                </div>
                <div className='star-2'>
                    <img src={Star} alt="Star..." />
                </div>
            </div>
            <div className='star-down'>
                <div className='star-1'>
                    <img src={StarWhite} alt="Star..." />
                </div>
                <div className='star-2'>
                    <img src={Star} alt="Star..." />
                </div>
            </div>
            <div className="sponsors">
                <div
                    className="sponsors-slide"
                >
                         {sponsors}
                </div>
                <img src={Background} alt="loading..."/>
            </div>
        </div>
    )
}