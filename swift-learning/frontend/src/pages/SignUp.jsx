import { Form, Link } from "react-router-dom"
import Side from "../components/Side"

const SignUp = () => {
  return (
    <>
        <Side />
        <div id="sside">
        <Form>
            <h2>Welcome to Swift e-Learning</h2>
            <h5>Creating learning experiences to your doorstep!</h5>
            <h6>Let us meet you</h6>
            <input type="text" name="" id="" placeholder="Full name" />
            <input type="text" name="" id="" placeholder="Course" />
            <input type="text" name="" id="" placeholder="Email" />
            <div id="terms">
                <input type="checkbox" name="" id="" />
                <div>
                  <p>Yes, I would like to recieve emails about feature updates, emerging partnerships, community information and so on.</p>
                  <p>I agree to the <Link>Terms of Use</Link> and <Link>Privacy Policy</Link></p>
                </div>
            </div>
            <button>Get Started</button>
            <button>Sign In</button>
            <p>or</p>
            <button>Continue with Google</button>
        </Form>
        </div>
    </>
  )
}

export default SignUp
