class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewTodo = this.addNewTodo.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateTodo = this.updateTodo.bind(this)
  }

  handleFormSubmit(title, done){
    let body = JSON.stringify({todo: {title: title, done: done} })

    fetch('http://localhost:3000/api/v1/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((todo)=>{
      this.addNewTodo(todo)
    })
    
  }

  addNewTodo(todo){
    this.setState({
      todos: this.state.todos.concat(todo)
    })
  }

   handleDelete(id){
    fetch(`http://localhost:3000/api/v1/todo/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteTodo(id)
      })
  }

  deleteTodo(id){
    newtodos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({
      todos: newtodos
    })
  }

  handleUpdate(todo){
    fetch(`http://localhost:3000/api/v1/todo/${todo.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({todo: todo}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateTodo(todo)
      })
  }
  updateTodo(todo){
    let newtodos = this.state.todos.filter((f) => f.id !== todo.id)
    newtodos.push(todo)
    this.setState({
      todos: newtodos
    })
  }

  componentDidMount(){
    fetch('/api/v1/todo.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ todos: data }) });
  }

  render(){
    return(
      <div>
        <NewTodo handleFormSubmit={this.handleFormSubmit}/>
        <AllTodos todos={this.state.todos} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}