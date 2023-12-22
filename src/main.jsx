import React from 'react'
import ReactDOM from 'react-dom/client'
import Currency from './converters/Currency.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Length from './converters/Length.jsx'
import Mass from './converters/Mass.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Currency />} />
      <Route path='length' element={<Length />} />
      <Route path='mass' element={<Mass />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
