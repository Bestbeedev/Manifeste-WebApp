import React from 'react'
import NavLinks from '../../utilities/NavLinks'
import { MdOutlineAddTask } from 'react-icons/md';
import { FiUsers } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa6";
const APropos= () => {
  return (
    <div className='m-3'>
      <p className='font-semibold text-yellow-400  my-2'>A Propos</p>
      <NavLinks icons={<MdOutlineAddTask />} path={'/'} value={'Notre Mission'}/>
      <NavLinks icons={<FiUsers />} path={'/'} value={'Partenariats'}/>
      <NavLinks icons={<FaQuoteRight />} path={'/'} value={'Faqs'}/>

    </div>
  )
}

export default APropos