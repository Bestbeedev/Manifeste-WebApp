import React from 'react'
import NavLinks from '../../utilities/NavLinks'
import { CgProfile } from "react-icons/cg";
import { RiFolderHistoryLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";

const UserInfo = () => {
  return (
    <div>
        <NavLinks icons={<CgProfile />} value={'Mon profil'} path={'/'}/>
        <NavLinks icons={<RiFolderHistoryLine />} value={'Historique de lecture'} path={'/'}/>
        <NavLinks icons={<GrFavorite />} value={'Favoris'} path={'/'}/>
        <NavLinks icons={<CiLogout />} value={'Deconnexion'} path={'/'}/>
    </div>
  )
}

export default UserInfo