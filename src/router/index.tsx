import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Dashboard from "../pages/Layout/Dashboard";
import Mine from "../pages/Layout/Mine";
import Setting from "../pages/Layout/Setting";
import Err404 from "../pages/404";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthRoute>
          <Layout />
        </AuthRoute>
      ),
      children: [
        { index: true, element: <Navigate to="/dashboard" replace /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "setting", element: <Setting /> },
        { path: "mine", element: <Mine /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <Err404 /> },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
