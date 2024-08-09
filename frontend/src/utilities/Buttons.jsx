import React from 'react'

const Buttons = ({onChange,value,styled}) => {
  return (
    <button className={`${styled} p-3 rounded-lg shadow-sm`}  onChange={onChange}>
        {value}
    </button>
  )
}

export default Buttons