import CalandarIcon from '@/components/CalandarIcon'
import Gradiants from '@/components/Gradiants'
import LangsList from '@/components/LangsList'
import Navbar from '@/components/Navbar'
import SendIcon from '@/components/SendIcon'
import Squares from '@/components/Squares'
import Image from 'next/image'

export default function About() {
  return (
    <div className='relative h-full overflow-hidden'>
      <div className='absolute bg-black z-[-2] w-screen h-[1000%]' />
      <Squares className='absolute z-[-1] top-0 left-0 pointer-events-none w-screen h-screen lg:block hidden' />

      <div className='overflow-hidden flex justify-center lg:h-screen lg:pb-0 pb-[300px]'>
        <div className='w-full h-full max-w-[2000px] relative'>
          <Gradiants className='absolute z-[-1] bottom-[-600px] left-[-200px] pointer-events-none lg:block hidden' />

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
              <div className='flex gap-4 lg:flex-row flex-col'>
                <a
                  href='mailto:yassineldeeb94@gmail.com'
                  className='lg:mt-0 mt-4 flex gap-2 justify-center items-center bg-[#FF4B24] text-white w-max lg:px-7 lg:py-4 px-5 py-3 rounded-full lg:text-xl text-lg font-medium cursor-pointer hover:opacity-95 transition duration-150'
                >
                  <SendIcon />
                  Contact Me
                </a>
                <a
                  href='https://calendly.com/yassineldeeb94/introductory'
                  className='lg:mt-0 flex gap-2 justify-center items-center border-[1.5px] border-[white] text-white w-max lg:px-7 lg:py-4 px-5 py-3 rounded-full lg:text-xl text-lg font-medium cursor-pointer hover:bg-[rgba(255,255,255,0.06)] transition duration-150'
                >
                  <CalandarIcon />
                  Schedule Call
                </a>
              </div>
            </main>
          </div>

          <img
            src='/me-speaking.png'
            className='absolute lg:h-screen max-h-[1100px] lg:top-0 bottom-[-400px] right-0 pointer-events-none z-[-2] lg:opacity-100 opacity-50'
          />
        </div>
      </div>

      <Squares className='absolute z-[-1] bottom-0 left-0 scale-y-[-1] scale-x-[-1] pointer-events-none w-screen h-screen lg:block hidden' />

      <div className='min-h-screen flex justify-center items-center'>
        <div className='py-20 lg:px-28 px-4 z-[100] h-full w-full max-w-[2000px]'>
          <div className='flex lg:flex-row-reverse flex-col-reverse justify-between items-center gap-14 lg:gap-28'>
            <div className='flex-1 min-w-[50%]'>
              <h4 className='text-[#D324FF] lg:text-xl text-lg font-medium mb-2'>
                Hello.
              </h4>
              <h1 className='text-white lg:text-5xl text-3xl font-bold'>
                My name is Yassin Eldeeb.
              </h1>

              <div className='mt-10 text-[#D9D9D9] leading-7 text-[17px]'>
                <p className='mb-4'>
                  As a Senior Software Engineer and Consultant, my journey into
                  the world of developer tooling and creating exceptional
                  customer experiences has been both unique and rewarding. My
                  commitment to coding intensified after graduating from a
                  frontend coding bootcamp at the age of 14, marking a pivotal
                  moment in my early career.
                </p>
                <p className='mb-4'>
                  Hailing from Tanta, Egypt, my early start in technology led me
                  to secure my first job at the age of 15. Shortly thereafter, I
                  began to make significant contributions to the JavaScript and
                  Rust open-source communities. My efforts have not only shaped
                  my professional skills but also allowed me to give back to the
                  community in meaningful ways.{' '}
                </p>
                <p className='mb-4'>
                  I am proud to have worked with{' '}
                  <a
                    className='underline'
                    href='https://invisible.institute/beneath-the-surface'
                  >
                    Invisible Institute's Beneath the Surface
                  </a>
                  , supporting their mission to foster justice in Chicago
                  against police abuse.
                </p>
                <p className='mb-4'>
                  Professionally, I currently serve as a Senior Open Source
                  Devtools Engineer at The Guild and am also available for
                  consulting opportunities.{' '}
                </p>
                <p className='mb-4'>
                  Outside of work, I seek adventure in activities such as
                  skydiving, hiking, and deep diving.{' '}
                </p>
                <p className='mb-4'>
                  I am passionate about sharing my experiences and knowledge,
                  frequently speaking at conferences and meetups globally.
                </p>
              </div>
            </div>
            <Image
              className='lg:max-w-[35%] max-w-[80%] z-[-2]'
              src='/me-again.png'
              alt='yassin eldeeb'
              width={1300}
              height={1300}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
