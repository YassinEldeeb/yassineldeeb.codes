import Gradiants from '@/components/Gradiants'
import Squares from '@/components/Squares'
import TechIcon from '@/components/TechIcon'

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      <div className='absolute bg-black z-[-2] w-screen h-screen' />
      <Squares className='absolute z-[-1] bottom-0 right-[0px] pointer-events-none w-screen h-screen' />
      <Gradiants className='absolute z-[-1] bottom-[-600px] left-[-200px] pointer-events-none' />

      <div className='flex justify-center'>
        <div className='w-full h-full max-w-[2000px] max-h-[100px] relative'>
          <div className='min-h-max px-28 z-[100] w-full'>
            <nav className='py-14 flex items-center justify-between'>
              <h1 className='text-[26px] text-white tracking-wider'>
                Yassin Eldeeb
              </h1>
              <div className='flex gap-10 text-white items-center'>
                <span className='cursor-pointer px-7 py-2.5 border-white border-solid border-[1px] rounded-full'>
                  Home
                </span>
                <span className='cursor-pointer'>Projects</span>
                <span className='cursor-pointer'>Talks</span>
                <span className='cursor-pointer'>Blogs</span>
              </div>
            </nav>
            <main className='flex flex-col gap-10 mt-16'>
              <div>
                <div className='flex gap-1.5 mb-2'>
                  <TechIcon imgPath='/rust.png' />
                  <TechIcon imgPath='/graphql.png' />
                  <TechIcon imgPath='/react.png' />
                  <TechIcon imgPath='/typescript.png' />
                  <TechIcon imgPath='/python.png' />
                </div>
                <h1 className='text-white font-bold 2xl:text-6xl 2xl:leading-[80px] xl:text-[52px] xl:leading-[70px] text-[45px] leading-[60px]'>
                  Empowering Developers &
                  <br />
                  Envisioning Products For
                  <br />
                  Innovative Impact.
                </h1>
              </div>
              <p
                className='text-[#D9D9D9] 2xl:text-2xl 2xl:leading-9
            xl:text-[21px] xl:leading-8 text-[18px] leading-7'
              >
                I build tools to make developers' lives easier and help
                companies
                <br />
                shape products that customers love.
              </p>
              <div className='flex gap-2 justify-center items-center bg-[#FF4B24] text-white w-max px-7 py-4 rounded-full text-xl font-medium cursor-pointer hover:opacity-95 transition duration-150'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='white'
                >
                  <path d='M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z' />
                </svg>
                Get In Touch
              </div>
            </main>
          </div>
          <img
            src='/me-speaking.png'
            className='absolute h-screen max-h-[1100px] top-0 right-[0px] pointer-events-none z-[-2]'
          />
        </div>
      </div>
    </div>
  )
}
