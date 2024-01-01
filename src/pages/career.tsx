import Navbar from '@/components/Navbar'
import Squares from '@/components/Squares'
import FictionApps from '@/components/companies/FictionApps'
import GithubIcon from '@/components/companies/Github'
import NestleIcon from '@/components/companies/Nestle'
import SpantreeIcon from '@/components/companies/Spantree'
import TheGuildIcon from '@/components/companies/TheGuild'
import YCPIcon from '@/components/companies/YCP'
import { ReactChild } from 'react'

const CareerListItem = ({
  date,
  title,
  Icon,
  Description,
}: {
  date: string
  Icon: ReactChild
  title: ReactChild
  Description: ReactChild
}) => (
  <>
    <svg
      className='lg:my-10 my-5'
      width='100%'
      height='12'
      viewBox='0 0 2781 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 11.3233C8.94552 11.3233 11.3333 8.93548 11.3333 5.98996C11.3333 3.04444 8.94552 0.656628 6 0.656628C3.05448 0.656628 0.666666 3.04444 0.666667 5.98996C0.666667 8.93548 3.05448 11.3233 6 11.3233ZM2775.5 11.3335C2778.45 11.3335 2780.83 8.94564 2780.83 6.00012C2780.83 3.0546 2778.45 0.666788 2775.5 0.666789C2772.55 0.666789 2770.17 3.0546 2770.17 6.00012C2770.17 8.94564 2772.55 11.3335 2775.5 11.3335ZM6 6.98996L2775.5 7.00012L2775.5 5.00012L6 4.98996L6 6.98996Z'
        fill='white'
        fill-opacity='0.2'
      />
    </svg>

    <div className='flex lg:gap-[30px] gap-[16px]'>
      <div className='lg:p-0 p-2.5 lg:min-w-[160px] lg:min-h-[160px] lg:max-w-[160px] lg:max-h-[160px] min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] rounded-full flex justify-center items-center border-2 border-[rgba(255,255,255,0.2)]'>
        {Icon}
      </div>
      <div className='text-white flex flex-col justify-center lg:gap-3.5 gap-2'>
        <h3 className='font-medium text-[#FF4B24]'>{date}</h3>
        <h2 className='font-medium lg:text-3xl text-2xl'>{title}</h2>
        <span className='lg:text-base text-xs career-description'>
          {Description}
        </span>
      </div>
    </div>
  </>
)

export default function Home() {
  return (
    <div className='relative bg-black pb-[200px]'>
      <div className='flex justify-center'>
        <div className='w-full h-full max-w-[2000px] relative'>
          <div className='min-h-max lg:px-28 px-4 z-[100] w-full'>
            <Navbar />
            <Squares className='absolute top-0 right-[0px] pointer-events-none w-screen h-screen' />
            <Squares
              squaresOpacity={0.25}
              className='absolute bottom-0 right-[0px] scale-x-[-1] pointer-events-none w-screen h-screen'
            />

            <div className='lg:mt-10 mt-2'>
              <h4 className='text-[#D324FF] lg:text-xl text-lg font-medium mb-2'>
                CAREER
              </h4>
              <h1 className='text-white lg:text-5xl text-3xl font-bold'>
                My Work Experience
              </h1>

              <CareerListItem
                Description={
                  <p className='lg:leading-8 leading-6'>
                    Co-leading Conductor's development, a performant gateway for
                    federated subgraphs <span className='font-bold'>•</span> Top
                    contributor for graphql.org{' '}
                    <span className='font-bold'>•</span> Authored The Guild's
                    newsletter <span className='font-bold'>•</span> <br />
                    Added SSO for GraphQL Hive and maintain Apollo Router Plugin{' '}
                    <span className='font-bold'>•</span> Member of The Graph{' '}
                    <span className='font-bold'>•</span> Active Speaker.
                  </p>
                }
                Icon={<TheGuildIcon />}
                date='Oct 2022 - Present'
                title='Senior Dev Tools Engineer @ The Guild'
              />

              <CareerListItem
                Description={
                  <p className='lg:leading-8 leading-6'>
                    Developed complex trading tools for Spiderrock{' '}
                    <span className='font-bold'>•</span> Collaborated with
                    Invisible Institute to build tools and pipelines combating
                    police abuse in Chicago <span className='font-bold'>•</span>{' '}
                    <br />
                    Built "Snapi", a content management versioning plugin for
                    Strapi <span className='font-bold'>•</span> Rewrote the
                    company’s website backend and API layer.
                  </p>
                }
                Icon={<SpantreeIcon />}
                date='Aug 2022 - Aug 2023'
                title='Senior Fullstack Consultant @ Spantree'
              />

              <CareerListItem
                Description={
                  <p className='lg:leading-8 leading-6'>
                    Led the launch of BJU Press Home School, now boasting over
                    50,000 active monthly students, by creating an interactive
                    activity builder.
                    <br /> This tool not only significantly enriches the
                    learning experience but also streamlines the process for
                    teachers to add content, questions, and quizzes.
                  </p>
                }
                Icon={<YCPIcon />}
                date='May 2022 - Oct 2022'
                title='Fullstack Consultant @ Your Creative People'
              />
              <CareerListItem
                Description={
                  <p className='lg:leading-8 leading-6'>
                    Crafted the "Create Prisma Generator"{' '}
                    <span className='font-bold'>•</span> Launched "Deadliner", a
                    Rust-based deadline management desktop app{' '}
                    <span className='font-bold'>•</span> Authored
                    "Prisma-tgql-types-generator"{' '}
                    <span className='font-bold'>•</span>
                    <br /> Launched "Memos" a cloud storage mobile app{' '}
                    <span className='font-bold'>•</span> Created a VS Code
                    extension for enriching .env file types{' '}
                    <span className='font-bold'>•</span> Developed "Sick
                    Market", a complete open source ecommerce app{' '}
                    <span className='font-bold'>•</span> And various other open
                    source contributions.
                  </p>
                }
                Icon={<GithubIcon />}
                date='Jan 2021 - May 2022'
                title='Independent Fulltime Open Source Engineer'
              />
              <CareerListItem
                Description={
                  <p className='lg:leading-8 leading-6'>
                    Developed multiple geographic tools to visualize customer
                    sales across Egypt and engineered internal tools to enhance
                    accountants' productivity.
                  </p>
                }
                Icon={<NestleIcon />}
                date='Jan 2020 - Jan 2021'
                title={
                  <span>
                    Senior Fullstack Engineer @ Nestlé{' '}
                    <span className='text-sm'>(Indirectly)</span>
                  </span>
                }
              />
              <CareerListItem
                Description={
                  <p className='lg:leading-8 leading-6'>
                    Led the learning materials for the frontend team{' '}
                    <span className='font-bold'>•</span> Developed multiple
                    promotional websites for the launched mobile apps including
                    "ADG", <br />
                    an app for buying and selling all kinds of used stuff in
                    Egypt.
                  </p>
                }
                Icon={<FictionApps />}
                date='Feb 2019 - Nov 2019'
                title='Lead Frontend Engineer @ Fiction Apps'
              />
            </div>
            <svg
              className='my-10'
              width='100%'
              height='12'
              viewBox='0 0 2781 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 11.3233C8.94552 11.3233 11.3333 8.93548 11.3333 5.98996C11.3333 3.04444 8.94552 0.656628 6 0.656628C3.05448 0.656628 0.666666 3.04444 0.666667 5.98996C0.666667 8.93548 3.05448 11.3233 6 11.3233ZM2775.5 11.3335C2778.45 11.3335 2780.83 8.94564 2780.83 6.00012C2780.83 3.0546 2778.45 0.666788 2775.5 0.666789C2772.55 0.666789 2770.17 3.0546 2770.17 6.00012C2770.17 8.94564 2772.55 11.3335 2775.5 11.3335ZM6 6.98996L2775.5 7.00012L2775.5 5.00012L6 4.98996L6 6.98996Z'
                fill='white'
                fill-opacity='0.2'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
