"use client";
import { useEffect, useState } from "react";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodoCompletion,
} from "@/actions/todoAction";
import { Todo } from "@/types/type";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const initialTodos = await getTodos();
      setTodos(initialTodos);
    };

    fetchTodos();
  }, []);

  const handleSubmit = async (formData: FormData) => {
    if (editingTodoId) {
      await updateTodo(editingTodoId, formData);
      setEditingTodoId(null);
    } else {
      await createTodo(formData);
    }

    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
    setInputValue("");
  };

  const handleEditClick = (todo: Todo) => {
    setInputValue(todo.text);
    setEditingTodoId(todo.id);
  };

  const handleDeleteClick = async (id: string) => {
    await deleteTodo(id);

    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  const handleToggleCompletion = async (id: string) => {
    await toggleTodoCompletion(id);

    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <form action={handleSubmit} className="flex mb-4">
        <input
          type="text"
          name="todoText"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded p-2 flex-grow"
          placeholder="Add or edit a task..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 ml-2"
        >
          {editingTodoId ? "Update" : "Add"}
        </button>
      </form>
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleToggleCompletion(todo.id)}
              className="mr-2"
            />
            <span
              className={`flex-grow ${todo.isCompleted ? "line-through" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleEditClick(todo)}
              className="bg-yellow-500 text-white rounded px-2 ml-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteClick(todo.id)}
              className="bg-red-500 text-white rounded px-2 ml-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
