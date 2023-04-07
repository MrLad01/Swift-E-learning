import { Link } from "react-router-dom";

export default function header(){
    return (
        <div>
            <img />
            <div>
                <Link>Home</Link>
                <div>
                    <select name="Courses" id="courses" value="Courses">
                        <option value="ui/ux">
                            <h3><strong>Introduction to UI/UX Design</strong></h3>
                            <h4>In this short course. you will learn the basics of UI/UX design, including design principles, color theory, typography, and layout. </h4>
                        </option>
                        <option value="pyhton">
                            <h3><strong>Introduction to Python</strong></h3>
                            <h4>Python is a high-level programming language that is known for its simplicity and readability. </h4>
                        </option>
                    </select>
                </div>
                <Link>Pricing</Link>
                <Link>Testimonials</Link>
            </div>
        </div>
    )
}