import Error from './Error'



const Input = dataProps => {



  const id = dataProps.id
  const inputHook = dataProps.inputHook


  return (

    <div className={ dataProps.className }>


      
      <label htmlFor={ id }>
        { dataProps.label }
      </label>

      <input
        type={ dataProps.type }
        id={ id }
        value={ inputHook.value }
        onInput={ inputHook.inputHandler }
        onBlur={ inputHook.blurHandler }
      />

      { inputHook.showError && (
        <Error innerText={ dataProps.error } />
      ) }


      
    </div>

    
  )

  
  
}



export default Input
