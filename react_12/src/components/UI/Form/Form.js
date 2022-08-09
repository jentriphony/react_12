import useInput from './../../../hooks/input_form'
import Input from './../Input/InputForm'



const valid = value => {

  return value.trim() !== ''
  
}

const Form = () => {



  const [
    input_1_hook,
    input_2_hook,
    input_3_hook
  ] = [
    useInput({ valid: valid }),
    useInput({ valid: valid }),
    useInput({ valid: valid })
  ]

  const formValid = input_1_hook.valid && input_2_hook.valid && input_3_hook.valid
  const input_1_class = `form-control${ input_1_hook.showError ? ' invalid' : '' }`
  const input_2_class = `form-control${ input_2_hook.showError ? ' invalid' : '' }`
  const input_3_class = `form-control${ input_3_hook.showError ? ' invalid' : '' }`

  

  const submitHandler = event => {

    event.preventDefault()

    input_1_hook.reset()
    input_2_hook.reset()
    input_3_hook.reset()

  }
  
  
  return (
    
    <form className='form' onSubmit={ submitHandler }>



      <div className='control-group'>
	<Input
	  className={ input_1_class }
	  type='text'
	  id='input_1'
	  label='input_1'
	  inputHook={ input_1_hook }
	  error='error_input_1'
	/>

	<Input
	  className={ input_2_class }
	  type='text'
	  id='input_2'
	  label='input_2'
	  inputHook={ input_2_hook }
	  error='error_input_2'
	/>
      </div>

      <Input
	className={ input_3_class }
	type='text'
	id='input_3'
	label='input_3'
	inputHook={ input_3_hook }
	error='error_input_3'
      />
      
      <div className='form-actions'>
        <button type='submit' disabled={ !formValid }>
          submit
        </button>
      </div>



    </form>

  )



}



export default Form
