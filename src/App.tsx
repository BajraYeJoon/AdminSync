import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./screen/Dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
