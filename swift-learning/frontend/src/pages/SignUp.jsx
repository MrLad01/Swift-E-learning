import { Form } from "react-router-dom"
import Side from "../components/Side"

const SignUp = () => {
  return (
    <>
      <Side />
      <div>
        <Form>
            <h2>Welcome Back</h2>
            <h5>Creating learning experiences to your doorstep!</h5>
            <h6>Let us meet you</h6>
            <input type="text" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Password" />
            <button>Sign In</button>
            <button>Sign Up</button>
            <p>or</p>
            <button>Continue with Google</button>
        </Form>
      </div>
    </>
  )
}

export default SignUp
