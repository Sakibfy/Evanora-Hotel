import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Page/Home";
import Main from "./Layout/Main";
import Rooms from "./Page/Rooms";
import PrivateRoute from "./private/PrivateRoute";
import MyBookings from "./Page/MyBookings";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import RoomDetails from "./Page/RoomDetails";



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
        path: '/rooms',
        element: <Rooms></Rooms>,
      },
      {
        path: '/mybookings',
        element: 
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>,
        
      },
      {
        path: '/roomdetails/:id',
        element:  <RoomDetails></RoomDetails>,
         loader: ({params}) => fetch(`https://evanora-hotel-server.vercel.app/rooms/${params.id}`)
      },
     
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ],
    
  },
])
export default router