import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <div className="header">
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
                <Link>Home</Link>
                <div>
                    <select name="Courses" id="courses" value="Courses">
                        <option value="" selected>Courses</option>
                        <option value="ui/ux">
                            <Link>
                                <img src="" alt="" />
                                <div>
                                    <h3><strong>Introduction to UI/UX Design</strong></h3>
                                    <h4>In this short course. you will learn the basics of UI/UX design, including design principles, color theory, typography, and layout. </h4>
                                </div>
                            </Link>
                        </option>
                        <option value="python">
                            <Link>
                                <img src="" alt="" />
                                <div>
                                    <h3><strong>Introduction to Python</strong></h3>
                                    <h4>Python is a high-level programming language that is known for its simplicity and readability. </h4>
                                </div>
                            </Link>
                        </option>
                        <option value="react">
                            <Link>
                                <img src="" alt="" />
                                <div>
                                    <h3><strong>Frontend Web Development With ReactJS</strong></h3>
                                    <h4>Hello guys, welcome to front-end web development with React!!. This course was made specifically for you, to take you f... </h4>
                                </div>
                            </Link>
                        </option>
                        <option value="wordpress">
                            <Link>
                                <img src="" alt="" />
                                <div>
                                    <h3><strong>Introduction to WordPress</strong></h3>
                                    <h4>WordPress is a popular content management system (CMS) that alllows users to easily create, manage, and publish digital... </h4>
                                </div>
                            </Link>
                        </option>
                        <option value="js">
                            <Link>
                                <img src="" alt="" />
                                <div>
                                    <h3><strong>JavaScript Basics</strong></h3>
                                    <h4>JavaScript(JS) is a high-level programming language that is commonly used for creating interactive web pages and... </h4>
                                </div>
                            </Link>
                        </option>
                    </select>
                </div>
                <Link to="#pricing">Pricing</Link>
                <Link to="#testimonials">Testimonials</Link>
            </div>
            <div>
                <input type="text" placeholder="Search for course"/>
                <button>Search</button>
            </div>
        </div>
    )
}