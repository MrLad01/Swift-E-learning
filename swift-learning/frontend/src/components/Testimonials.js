import { Link } from "react-router-dom"

export default function Testimonials(){
    return (
        <div className="testimonials">
            <h3 className="t-header">Testimonials</h3>
            <p className="t-subheader">What they say about us</p>
            <p>Cards swiper</p>
            <Link><button>Apply Now</button></Link>
        </div>
    )
}