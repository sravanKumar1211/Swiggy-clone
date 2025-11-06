import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Offers from './components/Offers.jsx'
import Help from './components/Help.jsx'
import SignIn from './components/SignIn.jsx'
import Cart from './components/Cart.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import RestaurantDetail from './components/RestaurantDetail.jsx'


const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<Error></Error>,
        children:[ 
                     {
                      path:'/',
                      element:<Body></Body>
                    },
                   {
                      path:'/offers',
                      element:<Offers></Offers>
                    },
                    {
                      path:'/help',
                      element:<Help></Help>
                    },
                    {
                      path:'/signin',
                      element:<SignIn></SignIn>
                    },
                    {
                      path:'/cart',
                      element:<Cart></Cart>
                    },
                     {
                      path:'/restaurant/:id',
                      element:<RestaurantDetail></RestaurantDetail>
                    }
                ]
  }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={appRouter}></RouterProvider>

)
