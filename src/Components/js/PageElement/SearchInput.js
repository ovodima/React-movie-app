import React from 'react'
import './Input.css'


export default function SearchInput(props) {
  const {value, change} = props
  return (
    <>
      
              <form action="#" id="form">
                  <input 
                  type="text" 
                  id="search" 
                  className="search" 
                  placeholder="Search" 
                  value={value}
                  onInput={change}
                  />
              </form>
        
    </>
  )
}
