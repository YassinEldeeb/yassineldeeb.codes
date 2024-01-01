import Gradiants from '@/components/Gradiants'
import LangsList from '@/components/LangsList'
import Navbar from '@/components/Navbar'
import SendIcon from '@/components/SendIcon'
import Squares from '@/components/Squares'

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='absolute bg-black z-[-2] w-screen h-screen' />
      <Squares className='absolute z-[-1] bottom-0 right-[0px] pointer-events-none w-screen h-screen lg:block hidden' />

      <div className='flex justify-center h-screen'>
        <div className='w-full h-full max-w-[2000px] relative'>
          <Gradiants className='absolute z-[-1] bottom-[-600px] left-[-200px] pointer-events-none' />

          <div className='min-h-max lg:px-28 px-4 z-[100] w-full'>
            <Navbar />
            <main className='flex flex-col lg:gap-10 gap-5 lg:mt-16 mt-2'>
              <div>
                <LangsList />
                <h1 className='text-white font-bold 2xl:text-6xl 2xl:leading-[80px] xl:text-[52px] xl:leading-[70px] lg:text-[45px] lg:leading-[60px] text-[26px]'>
                  Empowering Developers &
                  <br />
                  Envisioning Products For
                  <br />
                  Innovative Impact.
                </h1>
              </div>
              <p
                className='text-[#D9D9D9] 2xl:text-2xl 2xl:leading-9
            xl:text-[21px] xl:leading-8 lg:text-[18px] lg:leading-7 text-[16px]'
              >
                I build tools to make developers' lives easier and help
                companies
                <br />
                shape products that customers love.
              </p>
              <div className='lg:mt-0 mt-4 flex gap-2 justify-center items-center bg-[#FF4B24] text-white w-max lg:px-7 lg:py-4 px-5 py-3 rounded-full lg:text-xl text-lg font-medium cursor-pointer hover:opacity-95 transition duration-150'>
                <SendIcon />
                Get In Touch
              </div>
            </main>
          </div>

          <img
            src='/me-speaking.png'
            className='absolute lg:h-screen max-h-[1100px] lg:top-0 bottom-[-150px] right-0 pointer-events-none z-[-2] lg:opacity-100 opacity-50'
          />
        </div>
      </div>
    </div>
  )
}
