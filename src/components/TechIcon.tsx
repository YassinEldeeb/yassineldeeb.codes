import React from 'react'

interface Props {
  imgPath: string
}
const TechIcon = ({ imgPath }: Props) => {
  return (
    <div className='rounded-full lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] bg-[#111213] hover:bg-[#1c1e1f] transition duration-150 border-[1px] border-solid border-[#323232] flex items-center justify-center'>
      <img
        className='lg:p-2.5 p-2 hover:scale-110 transition duration-150'
        src={imgPath}
      />
    </div>
  )
}

export default TechIcon
