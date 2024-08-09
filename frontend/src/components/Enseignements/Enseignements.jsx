import React from 'react'
import NavLinks from '../../utilities/NavLinks'
import { MdOutlineTipsAndUpdates, MdOutlineWifiTethering } from "react-icons/md";
const Enseignements = () => {
  return (
    <div className='m-2'>
      <p className='font-semibold text-yellow-400  my-2'>Emseignements</p>
      <NavLinks icons={<MdOutlineWifiTethering />} path={'/dashboard/signup'} value={'A la Une'}/>
      <NavLinks icons={<MdOutlineTipsAndUpdates />} path={'/'} value={'Populaires'}/>
    </div>
  )
}

export default Enseignements