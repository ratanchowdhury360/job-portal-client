import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Shared/Register/Register";
import LogIn from "../Pages/Shared/LogIn/LogIn";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'signIn',
        Component: LogIn
      }

    ]
  },
]);