import React from 'react'
import { usePathname } from 'next/navigation'
import GithubIcon from './companies/Github'
import TwitterIcon from './TwitterIcon'

const NavItem = ({ path, label }: { path: string; label: string }) => (
  <a href={path} className='cursor-pointer lg:text-base text-md'>
    {label}
  </a>
)

const Navbar = () => {
  const pathname = usePathname()

  const navbarLinks = [
    { path: '/', label: 'About', moveActiveBy: '-25px' },
    { path: '/career', label: 'Career', moveActiveBy: '82px' },
    { path: '/talks', label: 'Talks', moveActiveBy: '120px' },
    { path: '/blogs', label: 'Blogs', moveActiveBy: '150px' },
  ]

  const getActivePosition = () => {
    const link = navbarLinks.find((link) => link.path === pathname)
    return link ? link.moveActiveBy : '0'
  }

  return (
    <nav className='lg:py-14 py-6 flex lg:flex-row flex-col-reverse lg:gap-0 gap-5 lg:justify-between lg:items-center'>
      <a
        href='/'
        className='lg:block hidden lg:text-[26px] text-[22px] text-white tracking-wider'
      >
        Yassin Eldeeb
      </a>

      <div>
        <div className='flex lg:gap-14 gap-5 text-white items-center relative lg:justify-normal justify-start'>
          <div
            style={{ left: getActivePosition() }}
            className='lg:block hidden bg-[rgba(255,255,255,0.08)] absolute w-[100px] h-[50px] px-7 py-2.5 border-white border-solid border-[1px] rounded-full pointer-events-none'
          />
          {navbarLinks.map((link) => (
            <NavItem key={link.path} path={link.path} label={link.label} />
          ))}
          <div className='flex items-center lg:gap-6 gap-4'>
            <a href='https://github.com/yassineldeeb' target='_blank'>
              <GithubIcon size={32} />
            </a>
            <a href='https://twitter.com/yassineldeeb7' target='_blank'>
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className='lg:hidden mt-5 w-[100%] h-[1.5px] bg-white opacity-20 rounded-full'></div>
      </div>
    </nav>
  )
}

export default Navbar
