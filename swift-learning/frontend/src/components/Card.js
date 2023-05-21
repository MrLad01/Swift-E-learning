import {Swiper,  SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";


import 'swiper/swiper-bundle.min.css';

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function Card({courses}) {
     const slide =  courses.map((course) => {
      return(
            <SwiperSlide
            modules={[A11y, Autoplay ]}
            grabCursor={true}
            autoplay={{delay: 2000}}
            slidesPerView={3}
            >
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
      <Swiper>
        {slide}
      </Swiper>
    </div>
  )
}
