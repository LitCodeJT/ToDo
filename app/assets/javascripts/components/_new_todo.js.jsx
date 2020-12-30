const NewTodo = (props) => {
  
    let formFields = {}
 
    return(
      <div>
        <input ref={input => formFields.title = input} placeholder='What is to be done?'/>
        <button onClick={ () => props.handleFormSubmit(formFields.title.value, false)}>Submit</button>
      </div>
    )
}