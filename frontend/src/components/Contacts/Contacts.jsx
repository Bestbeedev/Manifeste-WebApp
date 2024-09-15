import React from 'react'
import { CiFacebook, CiInstagram, CiYoutube } from 'react-icons/ci';
import NavLinkSimple from '../../utilities/NavLinkSimple';


const Contacts = () => {
  return (
    <div className='m-3'>
      <p className='font-semibold title  my-2'>Contacts</p>
      <NavLinkSimple icons={<CiFacebook/>} path={'https://facebook.com'} value={'Facebook'}/>
      <NavLinkSimple icons={<CiYoutube />} path={'https://youtube.com'} value={'YouTube'}/>
      <NavLinkSimple icons={<CiInstagram />} path={'https://instagram.com'} value={'Instagram'}/>
    </div>
  )
}

export default Contacts