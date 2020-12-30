class Todo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
   if(this.state.editable){
      let title = this.title.value
      let done = false
      let id = this.props.todo.id
      let todo = {id: id, title: title, done: done}
      this.props.handleUpdate(todo)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render(){
    let title = this.state.editable ? <input type='text' ref={input => this.title = input} defaultValue={this.props.todo.title}/>:<h3>{this.props.todo.title}</h3>
    //let done = this.state.editable ? <input type='text' ref={input => this.done = input} defaultValue={this.props.todo.done}/>:<p>{this.props.todo.done}</p>
    return(
      <div>
        {title}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.todo.id)}>Finished</button>
      </div>
    )      
  }
}


