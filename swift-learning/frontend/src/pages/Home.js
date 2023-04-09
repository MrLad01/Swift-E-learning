import Menu from "../components/Menu"
import Intro from "../components/Intro"
import Explore from "../components/Explore"
import Apply from "../components/Apply"
import Instructors from "../components/Instructors"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

export default function Home(){
    return (
        <div>
            <Menu />
            <Intro />
            <Explore />
            <Apply />
            <Instructors />
            <Pricing id="pricing" />
            <Testimonials id="testimonials" />
            <Newsletter />
            <Footer />
        </div>
    )
}