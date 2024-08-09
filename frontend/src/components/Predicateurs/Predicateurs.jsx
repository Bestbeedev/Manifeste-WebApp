import React from 'react'
import NavLinks from '../../utilities/NavLinks'
import { FaChalkboardTeacher } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
const Predicateurs= () => {
  return (
    <div className='m-3'>
      <p className='font-semibold text-yellow-400  my-2'>Predicateurs</p>
      <NavLinks icons={<FaChalkboardTeacher />} path={'/'} value={'Apotre Robert'}/>
      <NavLinks icons={<TiPlus />} path={'/'} value={'Voir Plus...'}/>
      </div>
  )
}

export default Predicateurs