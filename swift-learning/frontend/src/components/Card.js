import { SwiperSlide } from "swiper/react"

import 'swiper/swiper-bundle.min.css';

import "swiper/css";
import "swiper/css/navigation";
import Swiper from "swiper";

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
      <Swiper>
        {slide}
      </Swiper>
    </div>
  )
}
