import React from 'react'

const Buttons = ({onClick,value,styled}) => {
  return (
    <button className={`${styled} rounded-lg shadow-sm`}  onClick={onClick}>
        {value}
    </button>
  )
}

export default Buttons