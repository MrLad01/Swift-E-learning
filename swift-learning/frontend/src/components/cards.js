import options from "../data/options"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function Cards(){

    const slide = options.map(option => {
        return (
            <SwiperSlide className="slide">
                <img src={option.image} alt={option.alt} />
                <div>
                    <h2>{option.head}</h2>
                    <p>{option.context}</p>
                    <h3>ESTIMATED TIME</h3>
                    <p>{option.time}</p>
                </div>
            </SwiperSlide>
        )
    })

    return(
        <>
 `       <Swiper 
            modules={Navigation}
            navigation={true}
            slidesPerView={4}
            spaceBetween={34}
            className="explore-slide"
        >
            {slide}
        </Swiper>`
        </>
    )
}