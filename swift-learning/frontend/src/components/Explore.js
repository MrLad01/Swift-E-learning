import { Link, NavLink } from "react-router-dom"
import Cards from "./cards"

export default function Explore(){
    return (
        <div className="explore">
            <h3 className="explore-head">Explore most popular course</h3>
            <div className="explore-box">
                <NavLink>All</NavLink>
                <div className="vertical-line"></div>
                <NavLink>Web Development</NavLink>
                <div className="vertical-line"></div>
                <NavLink>UI/UX</NavLink>
                <div className="vertical-line"></div>
                <NavLink>Data Science</NavLink>
                <div className="vertical-line"></div>
                <NavLink>Graphics Design</NavLink>
                <div className="vertical-line"></div>
                <NavLink>Mobile Development</NavLink>
            </div>
            <Cards />
            <Link className="see-more">See all</Link>
        </div>
    )
}