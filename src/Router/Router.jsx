import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Shared/Register/Register";
import LogIn from "../Pages/Shared/LogIn/LogIn";
import JobDetails from "../Pages/JobDetails/JobDetails";




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
      },
      {
        path: '/jobs/:id',
        Component: JobDetails,
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },

    ]
  },
]);