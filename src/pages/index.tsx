import Gradiants from '@/components/Gradiants'
import Squares from '@/components/Squares'
import TechIcon from '@/components/TechIcon'

export default function Home() {
  return (
    <div className='relative'>
      <div className='absolute bg-black z-[-2] w-screen h-screen' />
      <Squares className='absolute z-[-1] bottom-0 right-[0px] pointer-events-none w-screen h-screen' />
      <Gradiants className='absolute z-[-1] bottom-[-600px] left-[-200px] pointer-events-none' />

      <div className='flex relative min-h-[100vh]'>
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
              <h1 className='text-white text-6xl font-bold leading-[80px]'>
                Empowering Developers &
                <br />
                Envisioning Products For
                <br />
                Innovative Impact.
              </h1>
            </div>
            <p className='text-[#D9D9D9] text-2xl leading-9'>
              I build tools to make developers' lives easier and help companies
              <br />
              shape products that customers love.
            </p>
            <div className='bg-[#FF4B24] text-white w-max px-7 py-4 rounded-full text-xl font-medium'>
              Get In Touch
            </div>
          </main>
        </div>
        <img
          src='/me-speaking.png'
          className='absolute h-screen top-0 right-[0px] pointer-events-none z-[-2]'
        />
      </div>
    </div>
  )
}
