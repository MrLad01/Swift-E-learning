import Menu from "../components/Menu"
import Intro from "../components/Intro"
import Explore from "../components/Explore"
import Apply from "../components/Apply"
import Instructors from "../components/Instructors"

export default function Home(){
    return (
        <div>
            <Menu />
            <Intro />
            <Explore />
            <Apply />
            <Instructors />
            <Pricing />
        </div>
    )
}