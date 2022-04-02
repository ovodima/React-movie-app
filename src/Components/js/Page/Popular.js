import React, {useContext} from 'react'
import { InputContext } from '../Hooks/InputContext'


export default function Popular() {
  const InputValue = useContext(InputContext)

  console.log(InputValue)
  return (
    <div>
      popular
 
    </div>
  )
}
