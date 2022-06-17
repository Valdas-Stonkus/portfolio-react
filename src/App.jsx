import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutTwoPages from './pages/Layout/LayoutTwoPages'
import About from './pages/About'
import Home from './pages/Home'
import Post from './pages/Post'

const App = () => (
    <Routes>
        <Route element={<LayoutTwoPages />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
        </Route>
    </Routes>

)

export default App
