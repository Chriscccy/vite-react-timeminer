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
import Register from "../pages/Register";
import Account from "../pages/Layout/Account/inde";
import Wallet from "../pages/Layout/Wallet";

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
        { path: "stake", element: <div>Stake</div> },
        { path: "wallet", element: <Wallet /> },
        { path: "mine", element: <Mine /> },
        {
          path: "account",
          element: <Account />,
          children: [{ path: "setting", element: <Setting /> }],
        },
      ],
    },

    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <Err404 /> },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
