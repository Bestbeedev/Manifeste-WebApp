import React from 'react'

const Buttons = ({onClick,value,styled}) => {
  return (
    <button className={`${styled} p-3 rounded-lg shadow-sm`}  onClick={onClick}>
        {value}
    </button>
  )
}

export default Buttons