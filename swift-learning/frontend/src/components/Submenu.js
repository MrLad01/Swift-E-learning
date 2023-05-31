import React from 'react'
import { Link } from 'react-router-dom'

const Submenu = () => {
  return (
    <div name="Courses" id="courses" value="Courses" >
        <ul>
            <li value="ui/ux">
                <Link>
                    <img src="" alt="" />
                    <div>
                        <h3><strong>Introduction to UI/UX Design</strong></h3>
                        <h4>In this short course. you will learn the basics of UI/UX design, including design principles, color theory, typography, and layout. </h4>
                    </div>
                </Link>
            </li>
            <li value="python">
                <Link>
                    <img src="" alt="" />
                    <div>
                        <h3><strong>Introduction to Python</strong></h3>
                        <h4>Python is a high-level programming language that is known for its simplicity and readability. </h4>
                    </div>
                </Link>
            </li>
            <li value="react">
                <Link>
                    <img src="" alt="" />
                    <div>
                        <h3><strong>Frontend Web Development With ReactJS</strong></h3>
                        <h4>Hello guys, welcome to front-end web development with React!!. This course was made specifically for you, to take you f... </h4>
                    </div>
                </Link>
            </li>
            <li value="wordpress">
                <Link>
                    <img src="" alt="" />
                    <div>
                        <h3><strong>Introduction to WordPress</strong></h3>
                        <h4>WordPress is a popular content management system (CMS) that alllows users to easily create, manage, and publish digital... </h4>
                    </div>
                </Link>
            </li>
            <li value="js">
                <Link>
                    <img src="" alt="" />
                    <div>
                        <h3><strong>JavaScript Basics</strong></h3>
                        <h4>JavaScript(JS) is a high-level programming language that is commonly used for creating interactive web pages and... </h4>
                    </div>
                </Link>
            </li>
            <li value="reactjs">
                <Link>
                    <img src="" alt="" />
                    <div>
                        <h3><strong>Web Development(ReactJS)</strong></h3>
                        <h4>ReactJS is a popular JavaScript library for building user interfaces. In this short course, you will learn the basics of ReactJS</h4>
                    </div>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Submenu
