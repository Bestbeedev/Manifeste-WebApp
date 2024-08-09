import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../utilities/Buttons'
import { useState } from 'react'
const Signup = () => {

  const [name,SetName]= useState('')
  const [mail,SetMail]= useState('')
  const [password, SetPassword]=useState('')

  const handleName=(e)=>{
    SetName(e.target.value)
  }
  const handleMail=(e)=>{
    SetMail(e.target.value)
  }
  const handlePassword=(e)=>{
    SetPassword(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.prevent.default
  }

  return (
    <form onSubmit={handleSubmit} className='w-[40vw] rounded-lg shadow-xl  mx-auto my-8 h-fit flex flex-col px-8 py-8 loginBg'>
        <h1 className='text-xl mb-3'>Inscription</h1>
        <span className='my-2 bg-slate-200 rounded-md p-3'>
        <input value={name} onChange={handleName} className='border-none text-slate-800 w-full outline-none bg-transparent' type='text' placeholder="Nom d'utlisateur"/>
        </span>
        <span className='my-2 bg-slate-200 rounded-md p-3'>
        <input value={mail} onChange={handleMail} className='border-none text-slate-800 w-full outline-none bg-transparent' type='text' placeholder='Email'/>
        </span>
        <span className='my-2  bg-slate-200 rounded-md p-3'>
        <input value={password} onChange={handlePassword} className='border-none text-slate-800 w-full outline-none bg-transparent' type='password' placeholder='Mot de passe'/>
        </span>
        <Link to='/'>
        <Buttons styled={'buttonStart w-full my-3 shadow-xl hover:bg-green-400'} value={'Commencez maintenant'}/>
        </Link>
        <span className='mt-2'>Avez-vous deja un compte? <Link className='font-medium text-yellow-400' to='/login'>
        Connectez-vous
        </Link></span>
    </form>
  )
}

export default Signup