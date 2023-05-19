import { SwiperSlide } from "swiper/react"

import 'swiper/swiper-bundle.min.css';

import "swiper/css";
import "swiper/css/navigation";

export default function Card({courses}) {
  return (
    <SwiperSlide>
    <div>
      {
        courses.map((course) => (
            <>
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
            </>
        ))
      }
    </div>
    </SwiperSlide>
  )
}
