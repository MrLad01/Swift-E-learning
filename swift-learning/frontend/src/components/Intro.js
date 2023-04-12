import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCoverflow } from 'swiper';
import data from '../data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';


export default function Intro(){

    const pictures = data.map(picture => {
        return (
            <SwiperSlide>
                <img src= {picture.img}  />
            </SwiperSlide>
        )
    })

    const swiperParams = {
        direction: 'horizontal', /* Set the direction to horizontal */
        loop: true, /* Enable looping of slides */
        grabCursor: true, /* Show a grab cursor when hovering over the slide */
        autoplay: {
          delay: 3000, /* Set the delay between slides */
          disableOnInteraction: false /* Allow autoplay to continue even when user interacts with slide */
        },
        speed: 2000, /* Set the speed of the slide animation */
        effect: 'coverflow', /* Use the "coverflow" effect */
        coverflowEffect: {
          rotate: 50, /* Set the rotation angle */
          slideShadows: false /* Disable slide shadows */
        },
      };
    


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
            spaceBetween={20}
            autoplay={{delay: 2000}}
            slidesPerView={5}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 50,
                slideShadows: false
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