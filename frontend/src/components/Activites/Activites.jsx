import React from 'react'
import { GrFavorite } from 'react-icons/gr'
import { RiFolderHistoryLine } from 'react-icons/ri'
import NavLinks from '../../utilities/NavLinks'
import { CiSaveDown1 } from 'react-icons/ci'

const Activites = () => {
  return (
    <div className='space-y-3'>
        <NavLinks icons={<RiFolderHistoryLine />} value={'Mon Historique'} path={'/activities/historique'}/>
        <NavLinks icons={<GrFavorite />} value={'Favoris'} path={'/activities/favoris'}/>
        <NavLinks icons={<CiSaveDown1 />} value={'Telechargement'} path={'/activities/telechargement'}/>
    </div>
  )
}

export default Activites