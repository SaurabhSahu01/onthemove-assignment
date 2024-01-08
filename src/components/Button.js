import React from 'react'
import "./Button.css"

function Button({isUpdateButton, placeholder, onClick}) {
  return (
    <div className={`${isUpdateButton ? 'whiteButton ' : 'blackButton '} flex flex-col justify-center items-center cursor-pointer`} onClick={onClick}>
      <p className={`${isUpdateButton ? 'text-black ' : 'text-white '} buttonText`}>{placeholder}</p>
    </div>
  )
}

export default Button