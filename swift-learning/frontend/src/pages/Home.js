import Menu from "../components/Menu"
import Intro from "../components/Intro"
import Explore from "../components/Explore"
import Apply from "../components/Apply"
import Instructors from "../components/Instructors"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { useState } from "react"


export default function Home(){

    
    // const [hideMenu, setHideMenu] = useState(false)

    const [open, setOpen] = useState(false);


    return (
        <div>
            <Menu open={open} setOpen={setOpen} />
            <Intro open={open} />
            <Explore />
            <Apply />
            <Instructors />
            <Pricing />
            <Testimonials id="testimonials" />
            <Newsletter />
            <Footer />
        </div>
    )
}