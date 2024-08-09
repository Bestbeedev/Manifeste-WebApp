import React from 'react'
import { GrFavorite } from 'react-icons/gr'
import { RiFolderHistoryLine } from 'react-icons/ri'
import NavLinks from '../../utilities/NavLinks'
import { CiSaveDown1 } from 'react-icons/ci'

const Activites = () => {
  return (
    <div className='m-3'>
        <p className='font-semibold text-yellow-400  my-2'>Activites</p>
        <NavLinks icons={<RiFolderHistoryLine />} value={'Historique de lecture'} path={'/'}/>
        <NavLinks icons={<GrFavorite />} value={'Favoris'} path={'/'}/>
        <NavLinks icons={<CiSaveDown1 />} value={'Telechargement'} path={'/'}/>
    </div>
  )
}

export default Activites