import React, { useEffect } from 'react'


const Favoris = () => {
  useEffect(() => {
console.log('Ready');
alert('Ready')
}, []);
  return (
    <div >
      <h1 className='z-50 text-8xl'>Favoris</h1></div>
  )
}

export default Favoris