import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../store/actions/todo";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo !== "") {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through 2px solid  #cf972e" : "none" }}
            onClick={() => handleDeleteTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div className="input-wrapper">
        <input
          type="text"
          value={todo}
          placeholder=" Create a new todo"
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
}
