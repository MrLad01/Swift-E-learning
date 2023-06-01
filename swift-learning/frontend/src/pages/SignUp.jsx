import { Form, Link } from "react-router-dom"
import Side from "../components/Side"
import wave from "../data/images/hand.png"
import Glogo from "../data/images/Google logo.png"

const SignUp = () => {
  return (
    <div className="signup">
        <Side />
        <div id="sside">
        <Form>
            <h2>Welcome to Swift e-Learning <img src={wave} alt="" style={{scale: "0.8"}} /></h2>
            <h5>Creating learning experiences to your doorstep!</h5>
            <h6>Let us meet you</h6>
            <input type="text" name="" id="" placeholder="Full name" required />
            <input type="text" name="" id="" placeholder="Course" required />
            <input type="email" name="" id="" placeholder="Email" required />
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
            <button><div id="google-button"><img src={Glogo} alt="" style={{scale: "0.8"}} /> Continue with Google</div></button>
        </Form>
        </div>
    </div>
  )
}

export default SignUp
