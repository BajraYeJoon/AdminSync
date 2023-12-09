import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./screen/Dashboard/Dashboard";
import UserList from "./components/UserList/UserList";
import UserDetail from "./components/UserDetail/UserDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
