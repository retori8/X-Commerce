/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import injectContext from './store/AppContext'
import Home from './views/Home'
import { SearchAnswer } from './views/SearchAnswer'
import { QuoteForm } from './views/QuoteForm'
import { QuoteAnswer } from './views/QuoteAnswer'
import { FooterCommerce } from './components/footerCommerce'



const Layout = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SearchAnswer" element={<SearchAnswer />} />
            <Route path="/QuoteForm" element={<QuoteForm />} />
            <Route path="/QuoteAnswer" element={<QuoteAnswer/>} />
        </Routes>
        <FooterCommerce/>
    </BrowserRouter>
  )
}

export default injectContext(Layout)