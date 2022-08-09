import useInput from './../../../hooks/input'
import Error from './Error'



const Input = () => {



  const inputHook = useInput({ valid: value => value.trim() !== '' })
  
  const showError = inputHook.showError
  const formClass = `form-control${ showError ? ' invalid' : '' }`



  const submitHandler = event => {

    event.preventDefault()

    inputHook.reset()

  }


  return (

    <form onSubmit={ submitHandler }>



      <div className={ formClass }>
        <label htmlFor='input'>
          input
        </label>

        <input
          type='text'
          id='input'
          onInput={ inputHook.inputHandler }
          onBlur={ inputHook.blurHandler }
          value={ inputHook.value }
        />

        { showError && (
          <Error innerText='error_input' />
        ) }
      </div>

      <div className='form-actions'>
        <button type='submit'>
          submit
        </button>
      </div>



    </form>

  )



}



export default Input
