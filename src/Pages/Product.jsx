import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
      <div className='h-full bg-blue-200'>
         
          
        <div className='flex gap-5 items-center justify-center underline font-bold text-blue-900'>
           <Link className='mt-4 text-decoration-underline' to='/product/men' >Mens items</Link>
            <Link className=' mt-4 text-decoration-underline' to='/product/women' >Womens items</Link>
        
        </div>
          
         
        <Outlet/>
      </div>
      
      
  )
}

export default Product