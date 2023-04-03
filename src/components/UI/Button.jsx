import React from 'react'

export default function Button(props) {
    
  return (
    <button class="bg-[#645CBB] px-5 py-2 m-3 rounded-lg text-white hover:bg-[#4e46aa] duration-300" onclick={props.onclick}>{props.btnTitle}</button>
  )
}
