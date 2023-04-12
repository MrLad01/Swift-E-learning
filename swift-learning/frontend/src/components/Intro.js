import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCoverflow } from 'swiper';
import Pictures from '../data/data';

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
            spaceBetween={30}
            autoplay={{delay: 2000}}
            slidesPerView={5}
            coverflowEffect={{
                rotate: 20,
                slideShadows: false,
                depth: 100,
                modifier: 1
            }}
            >
                {pictures}
            </Swiper>
            <div>
                logos
            </div>
        </div>
    )
}