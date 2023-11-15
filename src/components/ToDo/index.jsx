import { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { v4 as uuidv4 } from 'uuid';
import './index.css';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const uiId = uuidv4()
    const todo = {
      id: uiId,
      text: text,
    };
    setTodos([...todos, todo]);
    setText('');
  }

  const handleDelete = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  }

  const handleEdit = (id) => {
    const findTodo = todos.findIndex((x) => x.id === id)
    setText(todos[findTodo].text)
    setTodos(todos[findTodo].text)
}
  return (
    <div className='todo'>
      <div>
        <div className="todo-input">
          <label htmlFor="">Todo:</label>
          <input value={text} onChange={handleChange} type="text" />
          <button onClick={handleSubmit}>add</button>
        </div>
        <div className='todos'>
          <ul>
            {todos.map((todo) => (
              <li className='todo-item' key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={() => handleDelete(todo.id)}>X</button>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
