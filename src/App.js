import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({todo,index,markTodo,removeTodo}) {
  return (
    <div className="todo">
      <span style={{textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
      <div>
        <Button variant='outline-success' onClick={()=>markTodo(index)}>✓</Button>{' '}
        <Button variant='outline-danger' onClick={()=>removeTodo(index)}>X</Button>
      </div>
    </div>
  )
  
}

function FormTodo({addTodo}) {
  const [value,setValue]=useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!value) return;
    addTodo(value)
    setValue("")
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type='text' className='input' value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder='Add new Todo' />
      </Form.Group>
      <Button type='submit' variant="primary mb-3">Submit</Button>
    </Form>
  )
  
}
function App() {
  const [todo,settodo] = useState( [
    {
      isDone:false,
      text:'Learn React'
    },
    {
      isDone:true,
      text:'Learn Java'
    },
    {
      isDone:false,
      text:'Go to sleep'
    }
  ]
  )
  const addTodo = (text)=>{
    const newTodos = [...todo,{text}]
    settodo(newTodos)
  }
  const markTodo = (index)=>{
    const newTodos = [...todo]
    newTodos[index].isDone=true;
    settodo(newTodos)
  }
  const removeTodo = (index)=>{
    const newTodos = [...todo]
    newTodos.splice(index,1)
    settodo(newTodos)
  }
  return (
    <div className="app">
      <div className="container">
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormTodo addTodo={addTodo}/>
        <div>
          {todo.map((todo, index)=>(
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
