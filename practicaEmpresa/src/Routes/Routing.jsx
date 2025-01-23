import ReactDOM from 'react-dom/client'
import {CreateBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import Home from '../Pages/Home'

const router = CreateBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
   
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)

export default Routing