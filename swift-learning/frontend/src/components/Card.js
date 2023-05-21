import {Swiper,  SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, A11y, Autoplay, Keyboard } from "swiper";


import 'swiper/swiper-bundle.min.css';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard'
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function Card({courses}) {
     const slide =  courses.map((course) => {
      return(
            <SwiperSlide>
                <img src={course.img} alt={course.alt} />
                <h3>{course.head}</h3>
                <h4>{courses.amount}</h4>
                {
                    course.list.map((topic) => {
                        return (
                            <ul>
                                <li>{topic}</li>
                            </ul>
                        )
                    })
                }
            </SwiperSlide>
     )})

  return (
    <div>
      <Swiper
        modules={[A11y, Autoplay, Keyboard]}
        grabCursor={true}
        autoplay={{delay: 2000}}
        slidesPerView={3}
      >
        {slide}
      </Swiper>
    </div>
  )
}
