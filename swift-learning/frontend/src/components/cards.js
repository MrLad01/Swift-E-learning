import options from "../data/options"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation } from "swiper";

import 'swiper/swiper-bundle.min.css';

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function Cards(){

    const slide = options.map(option => {
        return (
            <SwiperSlide className="slide">
                <img src={option.image} alt={option.alt} style={{cursor:"pointer"}} />
                <div className="explore-description">
                    <h2>{option.head}</h2>
                    <p>{option.context}</p>
                    <h3>ESTIMATED TIME</h3>
                    <h4>{option.time}</h4>
                </div>
            </SwiperSlide>
        )
    })

    return(
        <>
        <div className="explore-slide">
 `       <Swiper 
            modules={Navigation}
            navigation={{
                prevEl: '.my-swiper-button-prev',
                nextEl: '.my-swiper-button-next'
            }}
            slidesPerView={4}
            spaceBetween={34}    
        >
            {slide}
        </Swiper>
        </div>
        <div className="navigation-buttons"> 
             <button className="my-swiper-button-prev">&larr;</button>
             <button className="my-swiper-button-next">&rarr;</button>
        </div>
        </>
    )
}