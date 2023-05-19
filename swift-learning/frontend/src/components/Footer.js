import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <div className="footer">
            <div className="f-logo">
                <div id="f-logoname">
                    <div id="ff-logo">
                        <div className="ff-box box1"></div>
                        <div className="ff-box box2"></div>
                        <div className="ff-box box3"></div>
                        <div className="ff-box box4"></div>
                    </div>
                    <div id="ff-name">
                        <h4>Swift</h4>
                        <p>e-Learning</p>
                    </div>
                </div>
                <p>Most affordable and friendly E-Learning Platform </p>
            </div>
            <div className="f-middle">
                <div id="f-links">
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
                        <Link>Self-paced Courses</Link>
                        <Link>Incubator Programs</Link>
                        <Link>Personal Coaching</Link>
                        <Link>Enterprise Learning</Link>
                        <Link>Career-building Paths</Link>
                    </div>
                    <div>
                        <h4>Courses</h4>
                        <Link>JavaScript</Link>
                        <Link>React</Link>
                        <Link>Power BI</Link>
                        <Link>Python</Link>
                        <Link>SQL</Link>
                    </div>
                </div>
                <p>&copy; Copyright 2023 All Rights Reserved </p>
            </div>
            <div className="f-visit">
                <p>Visit Us</p>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}