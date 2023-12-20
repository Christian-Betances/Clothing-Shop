import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './pages/Shop.jsx'
import Home from './pages/Home.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Shop",
    element: <Shop />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
