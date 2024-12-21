import { RouteObject } from "react-router-dom";
import Login from "../pages/login";
import AuthLayout from "../layout/auth-layout";
import Register from "../pages/register";
import RootLayout from "../layout/root-layout";
import Home from "../pages/home";
import Profile from "../pages/profile";
import { EditProfile } from "../pages/edit-profile";
import EditWishlist from "../pages/edit-wishlist";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit",
        element: <EditProfile />,
      },
      {
        path: "wishlist/:id",
        element: <EditWishlist />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
