import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contacts from './routes/Contacts.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'
import Info from './routes/Info.jsx'
import Search from './routes/Search.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      },
      {
        path: "products/:id",
        element: <Products/>
      },
      {
        path: "products/:id/info",
        element: <Info/>
      },
      {
        path: "search",
        element: <Search/>
      }
    ]
  }, 
 // {
 //   path: "contacts",
 //   element: <Contacts/>,
 // },
]) // PARA CONFIGURAR AS ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
