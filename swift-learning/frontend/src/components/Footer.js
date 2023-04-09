import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4>Swift</h4>
                        <p>e-Learning</p>
                    </div>
                </div>
                <p>Most affordable and friendly E-Learning Platform </p>
            </div>
            <div>
                <div>
                    <h4>Quick Links</h4>
                    <Link>Blog</Link>
                    <Link>Pricing</Link>
                    <Link>Instructors</Link>
                    <Link>Careers</Link>
                    <Link>Support</Link>
                    <Link>Terms & Condition</Link>
                    <Link>Privacy Policies</Link>
                </div>
                <div>
                    <h4>Learning Options</h4>
                </div>
            </div>
        </div>
    )
}