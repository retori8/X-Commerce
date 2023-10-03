/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import injectContext from './store/AppContext'
import Home from './views/Home'
import { Demo } from './views/Demo'


const Layout = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />

        </Routes>
    </BrowserRouter>
  )
}

export default injectContext(Layout)