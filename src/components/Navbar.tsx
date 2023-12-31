import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-14 flex items-center justify-between'>
      <h1 className='text-[26px] text-white tracking-wider'>Yassin Eldeeb</h1>
      <div className='flex gap-10 text-white items-center'>
        <span className='cursor-pointer px-7 py-2.5 border-white border-solid border-[1px] rounded-full'>
          Home
        </span>
        <span className='cursor-pointer'>Projects</span>
        <span className='cursor-pointer'>Talks</span>
        <span className='cursor-pointer'>Blogs</span>
      </div>
    </nav>
  )
}

export default Navbar
