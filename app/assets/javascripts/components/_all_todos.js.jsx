const AllTodos = (props) => {

  var todos = props.todos.map((todo) => {
    return(
      <div key={todo.id}>
       <Todo todo={todo} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

  return(
      <div>
        {todos}
      </div>
    )
}