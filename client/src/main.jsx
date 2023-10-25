import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage } from './Pages/MainPage.jsx'
import { LoginPage } from './Pages/LoginPage.jsx'
import { RegisterPage } from './Pages/RegisterPage.jsx'
import { PortfolioPage } from './Pages/PortfolioPage.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/main",
    element: <MainPage/>,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage/>,
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store } >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
