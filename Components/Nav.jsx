import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <div>
            <div className="bg-blue-950 text-white h-20 flex items-center gap-15 ">
            <div className='font-bold'>Welcome 😎 </div>
            <div className="flex gap-20">

                  <Link to='/'>Home</Link>
                  <Link to='/contact'>Contact</Link>
                  <Link to='/about' >About</Link>
                  <Link to='/product'>Product</Link>

            </div>
             </div>


         </div>
  )
}

export default Nav