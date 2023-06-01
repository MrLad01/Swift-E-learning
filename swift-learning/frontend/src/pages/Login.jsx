import { Form } from "react-router-dom"
import Side from "../components/Side"
import wave from "../data/images/hand.png"
import Glogo from "../data/images/Google logo.png"

const Login = () => {
  return (
    <div className="login">
        <Side />
        <div id="sside">
        <Form>
            <h2>Welcome Back <img src={wave} alt="" style={{scale: "0.8"}} /></h2>
            <h5>Creating learning experiences to your doorstep!</h5>
            <h6>Let us meet you</h6>
            <input type="email" name="" id="" placeholder="Email" required />
            <input type="password" name="" id="" placeholder="Password" required />
            <button>Sign In</button>
            <button>Sign Up</button>
            <p>or</p>
            <button><div id="google-button"><img src={Glogo} alt="" style={{scale: "0.8"}} /> Continue with Google</div></button>
        </Form>
        </div>
    </div>
  )
}

export default Login
