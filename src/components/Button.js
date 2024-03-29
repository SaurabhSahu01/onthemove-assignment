import React from 'react'
import "./styles/Button.css"

function Button({isUpdateButton, placeholder, onClick}) {
  return (
    <div className={`${isUpdateButton ? 'whiteButton ' : 'blackButton '} flex flex-col justify-center items-center cursor-pointer`} onClick={onClick}>
      <p className={`${isUpdateButton ? 'text-black ' : 'text-white '} buttonText select-none`}>{placeholder}</p>
    </div>
  )
}

export default Button