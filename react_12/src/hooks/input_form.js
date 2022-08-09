import { useState } from 'react'



const useInput = dataProps => {



  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

  const valid = dataProps.valid(value)
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
    valid,
    inputHandler,
    blurHandler,
    showError,
    reset
  }
  

  
}



export default useInput
