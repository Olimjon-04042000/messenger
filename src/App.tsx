import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Chats from "./pages/Chats"
import CssBaseline from '@mui/material/CssBaseline';

import Login from "./pages/Login"

const router= createBrowserRouter([
  {
path:"/",
element:<Chats /> ,
},
{
  path:"/login",
  element: <Login />
}
]);


function App() {

  return (
    <>
            <CssBaseline />

      <RouterProvider router={router}/>
      {/* <Login/> */}
    </>
  )
}

export default App
