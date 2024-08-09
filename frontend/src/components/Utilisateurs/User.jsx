import React from 'react'
import profil from   '../../../src/assets/profile.jpg'
const User = () => {
  return (
    <div className='px-3 flex space-x-3 items-center'>
      <span className='rounded-full'>
        <img className='rounded-full object-cover size-12' src={profil} alt="" />
      </span>
      <span>
        <p className='font-semibold'>Besdev</p>
        <p className=''>Admin</p>
      </span>
    
    </div>
  )
}

export default User