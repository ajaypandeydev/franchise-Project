import React from 'react'
import MainRoute from './router/MainRoute'
import AdminRoute from './router/AdminRoute'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* <MainRoute /> */}
      <AdminRoute />
    </BrowserRouter>
  )
}

export default App