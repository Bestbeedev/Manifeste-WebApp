import React from 'react'
import NavLinks from '../../utilities/NavLinks'
import { MdOutlineTipsAndUpdates, MdOutlineWifiTethering } from "react-icons/md";
const Enseignements = () => {
  return (
    <div className='m-2'>
      <p className='font-semibold title my-2'>Enseignements</p>
      <NavLinks icons={<MdOutlineWifiTethering />} path={'/enseignements/a-la-une'} value={'A la Une'}/>
      <NavLinks icons={<MdOutlineTipsAndUpdates />} path={'/enseignements/populaires'} value={'Populaires'}/>
    </div>
  )
}

export default Enseignements