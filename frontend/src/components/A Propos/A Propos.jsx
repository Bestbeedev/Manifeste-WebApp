import React from 'react'
import NavLinks from '../../utilities/NavLinks'
import { MdOutlineAddTask } from 'react-icons/md';
import { FiUsers } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa6";
const APropos= () => {
  return (
    <div className='m-3'>
      <p className='font-semibold title my-2'>A Propos</p>
      <NavLinks icons={<MdOutlineAddTask />} path={'/about/mission'} value={'Notre Mission'}/>
      <NavLinks icons={<FiUsers />} path={'/about/partenariat'} value={'Partenariats'}/>
      <NavLinks icons={<FaQuoteRight />} path={'/about/faqs'} value={'Faqs'}/>

    </div>
  )
}

export default APropos