import Home from "./pages/Home"
import Products from "./pages/Products"
import Users from "./pages/Users"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Menu from "./components/Menu"


import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import User from "./pages/User"
import Product from "./pages/Product"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()
function App() {
  
  const Layout = () =>{
   return(
      <div className="h-screen flex flex-col font-sans bg-gray-800 text-gray-50 justify-between max-xl:h-auto">
        <Navbar />
        <div className="flex">
          <div className="w-64 px-5 py-1 border-r-2 border-solid border-gray-700 max-lg:w-max">
            <Menu/>
          </div>
          <div className="px-5 py-1 w-full">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
   )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home />,
        },
        {
          path:"/users",
          element:<Users />,
        },
        {
          path:"/products",
          element:<Products />,
        },
        {
          path:"/users/:id",
          element:<User />,
        },
        {
          path:"/products/:id",
          element:<Product />,
        },
      ]
    },
  
  ])


  return (
    <RouterProvider router={router}/>
  )
}

export default App
