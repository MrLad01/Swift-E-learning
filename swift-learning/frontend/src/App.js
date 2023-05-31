import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Pricing from "./components/Pricing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router= {router} />
  );
}

export default App;
