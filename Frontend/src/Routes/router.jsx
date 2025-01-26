import { Navigate } from "react-router-dom";
import AdminDashboard from "../components/Dashboard/auth/AdminDashboard";
import Approved from "../pages/approved";
import Home from "../pages/Home";
import Pending from "../pages/pending";
import Request from "../pages/request";
import AllData from "../pages/AllData";
import Setting from "../pages/Setting";
import Logout from "../pages/auth/Logout";
import Dashboard from "../components/Dashboard/Dashboard";

const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <AdminDashboard />,
      children: [
        {
          path: "",
          element: <Navigate to="request" />, // Default redirect
        },
        {
          path: "pending",
          element: <Pending />,
        },
        {
          path: "approved",
          element: <Approved />,
        },
        {
          path: "request",
          element: <Request />,
        },
        {
          path: "alldata",
          element: <AllData />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
       
      ],
    },
    {
      path: "/user",
      element: <Dashboard/>,
      children: [
        {
          path: "",
          element: <Navigate to="request" />, // Default redirect
        },
        {
          path: "wedding-loan",
          element: <Pending />,
        },
        {
          path: "home-construction-loan",
          element: <Approved />,
        },
        {
          path: "business-startup-loan",
          element: <Request />,
        },
        {
          path: "education-Loan",
          element: <AllData />,
        },
       
      ],
    },
  ];

  export default routes;