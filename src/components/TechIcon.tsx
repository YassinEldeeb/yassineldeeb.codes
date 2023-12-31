import React from 'react'

interface Props {
  imgPath: string
}
const TechIcon = ({ imgPath }: Props) => {
  return (
    <div className='rounded-full w-[50px] h-[50px] bg-[#111213] hover:bg-[#1c1e1f] transition duration-150 border-[1px] border-solid border-[#323232] flex items-center justify-center'>
      <img
        className='p-2.5 hover:scale-110 transition duration-150'
        src={imgPath}
      />
    </div>
  )
}

export default TechIcon
