import { Link, NavLink } from "react-router-dom"

export default function Explore(){
    return (
        <div className="Explore">
            <h3>Explore most popular course</h3>
            <div>
                <NavLink>All</NavLink>
                <NavLink>Web Development</NavLink>
                <NavLink>UI/UX</NavLink>
                <NavLink>Data Science</NavLink>
                <NavLink>Graphics Design</NavLink>
                <NavLink>Mobile Development</NavLink>
            </div>
            <div>Slide</div>
            <Link>See all</Link>
        </div>
    )
}