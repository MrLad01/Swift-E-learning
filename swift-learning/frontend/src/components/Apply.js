import { Link } from "react-router-dom"
import pics from "../data/images/IMAGEsee.png"

export default function Apply() {
    return (
        <div className="apply">
            <div className="apply-text">
                <h3>Transform yourself by learning at your convenience</h3>
                <p className="goal">Our goal is not only provide students with education amd experiences that prepare them for a successful career, but also to support them on achieving success in their chosen field by encouraging them to explore their passions and become leaders in their field.</p>
                <p>Apllications are now open</p>
                <Link><button>Apply Now</button></Link>
            </div>
            <img src={pics} alt="Loading..."/>
        </div>
    )
}