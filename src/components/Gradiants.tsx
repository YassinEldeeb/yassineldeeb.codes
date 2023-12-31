import * as React from 'react'

const Gradiants = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    style={{
      display: 'flex',
      opacity: 0.3,
    }}
    {...props}
  >
    <div className='gradiant-blur h-[748px] w-[664px] bg-[#FF4B24]'></div>
    <div className='gradiant-blur h-[748px] w-[664px] bg-[#D324FF]'></div>
  </div>
)
export default Gradiants
