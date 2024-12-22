import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Page/Home";
import Main from "./Layout/Main";
import Rooms from "./Page/Rooms";
import PrivateRoute from "./private/PrivateRoute";
import MyBookings from "./Page/MyBookings";
import Login from "./Authentication/Login";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
      element: <Home></Home>
      },
      {
        path: '/Rooms',
        element: <Rooms></Rooms>,
      },
      {
        path: '/my-bookings',
        element: 
          <PrivateRoute>
            <MyBookings></MyBookings>
        </PrivateRoute>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
    ],
    
  },
])
export default router