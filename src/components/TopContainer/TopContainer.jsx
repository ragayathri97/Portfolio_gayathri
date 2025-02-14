import React from 'react'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'
import "../TopContainer/TopContainer.css"

const TopContainer = () => {
  return (
    <Element name='about' className='TopContainer'>
    <TopContent />
    </Element>
  )
}

export default TopContainer