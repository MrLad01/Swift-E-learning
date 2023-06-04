import { Link } from "react-router-dom";
import Submenu from "./Submenu"

export default function Menu({open, setOpen}){

    const handleClick = () => {
        setOpen(!open)
    } 

    return (
        <>
        <nav className="header">
            <div className="logo">
                <div className="logo-img">
                    <div className="logo-box box1"></div>
                    <div className="logo-box box2"></div>
                    <div className="logo-box box3"></div>
                    <div className="logo-box box4"></div>
                </div>
                <div className="logo-text">
                    <h3>Swift</h3>
                    <p>e-Learning</p>
                </div>
            </div>
            <div className="header-nav">
                <Link to="/">Home</Link>
                <Link to="" onClick={handleClick}>Courses</Link>
                <Link to="pricing" target="_blank">Pricing</Link>
                <Link to="#testimonials">Testimonials</Link>
            </div>
            <div className="header-search">
                <input type="text" placeholder="Search for course"/>
                <button>Search</button>
            </div>
        </nav>
            {  open && <Submenu />  }
        </>
    )
}