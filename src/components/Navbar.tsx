import React from 'react'
import { usePathname } from 'next/navigation'

const NavItem = ({ path, label }: { path: string; label: string }) => (
  <a href={path} className='cursor-pointer'>
    {label}
  </a>
)

const Navbar = () => {
  const pathname = usePathname()

  const navbarLinks = [
    { path: '/', label: 'Home', moveActiveBy: '-25px' },
    { path: '/career', label: 'Career', moveActiveBy: '82px' },
    { path: '/talks', label: 'Talks', moveActiveBy: '120px' },
    { path: '/blogs', label: 'Blogs', moveActiveBy: '150px' },
  ]

  const getActivePosition = () => {
    const link = navbarLinks.find((link) => link.path === pathname)
    return link ? link.moveActiveBy : '0'
  }

  return (
    <nav className='py-14 flex items-center justify-between'>
      <a href='/' className='text-[26px] text-white tracking-wider'>
        Yassin Eldeeb
      </a>
      <div className='flex gap-14 text-white items-center relative'>
        <div
          style={{ left: getActivePosition() }}
          className='bg-[rgba(255,255,255,0.08)] absolute w-[100px] h-[50px] px-7 py-2.5 border-white border-solid border-[1px] rounded-full pointer-events-none'
        />
        {navbarLinks.map((link) => (
          <NavItem key={link.path} path={link.path} label={link.label} />
        ))}
      </div>
    </nav>
  )
}

export default Navbar
