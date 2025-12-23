import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Shared/Register/Register";
import LogIn from "../Pages/Shared/LogIn/LogIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoute from "../Routes/PrivateRoute";
import MyApplications from "../Pages/MyApplications/MyApplications";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
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
      {
        path: 'jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: 'myApplications',
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: 'addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: 'myPostedJobs',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },

    ]
  },
]);