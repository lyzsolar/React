import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter} from 'react-router-dom'
import HomePage from './components/pages/HomePage.jsx'
import BeginSesion from './components/pages/BeginSesion.jsx'
import { RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
{
  path:'/',
  element: <BeginSesion/>,
  errorElement: <h1>Not Found</h1>,
},

{
  path:'/HomePage',
  element: <HomePage></HomePage>,
  errorElement: <h1>Not Found</h1>,
},

{
  path:'/BeginSesion',
  element: <BeginSesion></BeginSesion>,
  errorElement: <h1>Not Found</h1>,
},

{
  path:'*',
  element: <h1>Not Found</h1>,
  errorElement: <h1>Not Found</h1>,
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
