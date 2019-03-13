import React, {Component} from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component{
    state= {
        todos: []
    }
    deleteTodo= (id) =>{
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos
        })
    }
    crossTodo= (id) =>{
        
    }
    addTodo = (todo) => {
        todo.id= Math.random()
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }
    render(){
        return (
            <div>
                <h1>Todos</h1>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} crossTodo={this.crossTodo} />
            </div>
        )
    }
}

export default App