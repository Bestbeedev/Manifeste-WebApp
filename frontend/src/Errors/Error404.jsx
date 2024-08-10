import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='w-fit mx-auto p-3 rounded-lg text-center bg-blue-700  my-20 flex flex-col'>
      <p className='text-white  text-[5rem]  text-center mx-auto w-full'>404</p>
      <p className='text-xl mb-3'>Page Introuvable</p>
      <p className='mb-3'>Merci de vérifier l'URL ou retourner à la page d'accueil</p>
      <Link className="font-medium  text-yellow-300" to="/">
          Page d'accueil
      </Link>
    </div>
  )
}

export default Error404