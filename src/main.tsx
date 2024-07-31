import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './index.css'
import { ErrorPage } from './error'
import { ProductPage, RootPage } from './routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={'/'}
      element={<RootPage />}
      errorElement={<ErrorPage />}>
      <Route
        path={'/'}
        element={<ProductPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
