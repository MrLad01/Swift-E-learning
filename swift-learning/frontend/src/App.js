import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Pricing from "./components/Pricing";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="pricing" element={<Pricing />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router= {router} />
  );
}

export default App;
