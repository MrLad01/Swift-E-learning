import { createBrowserRouter, createRoutesFromElements, Route, RouteProvider } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

    </Route>
  )
)

function App() {
  return (
    <RouteProvider router= {router} />
  );
}

export default App;
