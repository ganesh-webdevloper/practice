import { useState } from "react"

import {Link, Route, Routes, useParams} from 'react-router-dom'
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Nav from "../Components/Nav"
import Product from "./Pages/Product"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Footer from "../Components/Footer"
import NotFound from "./Pages/NotFound"

function App() {
 
  



  return (
    <>
      <Nav />
      
      <div className="bg-green-200 h-150">
              <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound/>} />

                    <Route path="/product" element={<Product />} >
                      
                      <Route path="men" element={<Men/> } />
                      <Route path="women" element={<Women />} />
                      
                     </Route>

                    <Route path="/about/:id" element={<NotFound />} />

                   </Routes>
    </div>



      <Footer/>


   
      
    
      
   
    </>
  )
}

export default App
