import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home '
import About from './pages/About'
import Contact from './pages/Contact'
import Events from './pages/Events'
// import Posts from './components/Posts'
import News from './pages/News'
import Shop from './pages/shop/Shopfront'
// import Shopfront from './pages/shop/Shopfront'
import Product from './pages/shop/Product'


const Links = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/events' element={<Events />} />
            {/* <Route path='/events' element={<Posts />} /> */}
            <Route path='/news' element={<News />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    )
}

export default Links