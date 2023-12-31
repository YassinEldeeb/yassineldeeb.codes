import React from 'react'
import TechIcon from './TechIcon'

const LangsList = () => {
  return (
    <div className='flex gap-1.5 mb-2'>
      <TechIcon imgPath='/rust.png' />
      <TechIcon imgPath='/graphql.png' />
      <TechIcon imgPath='/react.png' />
      <TechIcon imgPath='/typescript.png' />
      <TechIcon imgPath='/python.png' />
    </div>
  )
}

export default LangsList
