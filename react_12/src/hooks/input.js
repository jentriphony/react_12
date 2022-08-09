import { useState } from 'react'



const useInput = dataProps => {



  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

  let valid = true
  active && (valid = dataProps.valid(value))
  const showError = active && !valid



  const inputHandler = event => {

    setValue(event.target.value)
    
  }

  const blurHandler = () => {

    !active && setActive(true)
    
  }

  const reset = () => {

    setValue('')
    setActive(false)
    
  }


  return {
    value,
    reset,
    inputHandler,
    blurHandler,
    showError
  }


  
}



export default useInput
