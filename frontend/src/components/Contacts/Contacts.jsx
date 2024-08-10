import React from 'react'
import NavLinks from '../../utilities/NavLinks'
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci';


const Contacts = () => {
  return (
    <div className='m-3'>
      <p className='font-semibold title  my-2'>Contacts</p>
      <NavLinks icons={<CiFacebook/>} path={'https://facebook.com'} value={'Facebook'}/>
      <NavLinks icons={<CiYoutube />} path={'https://youtube.com'} value={'Youtube'}/>
      <NavLinks icons={<CiInstagram />} path={'https://instagram.com'} value={'Instagram'}/>
    </div>
  )
}

export default Contacts