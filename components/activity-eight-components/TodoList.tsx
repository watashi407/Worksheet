"use client";
import { createTodo } from "@/actions/todoActionSupabase";
import { useActionState } from "react";
import { todoSupa } from "@/types/type";
import List from "./List";

interface Props {
  todos: todoSupa[]; // Ensure this is an array of your todo items
}

export default function TodoList({ todos }: Props) {
  const [error, action, isPending] = useActionState(createTodo, null);

  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md mb-5">
        To Do List
      </h1>

      <form action={action} className="flex items-center space-x-4">
        <input
          type="text"
          name="task"
          className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400"
          placeholder="Stop Slacking Make A Todo Work Today"
        />
        <button
          disabled={isPending}
          type="submit"
          className={`px-6 py-3 text-white font-medium rounded-lg shadow-md transition-all duration-300 ${
            isPending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isPending ? "Adding ..." : "Add"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}

      <ul className="mt-6 space-y-4">
        {todos.map((todo) => (
          <List
            key={todo.id}
            task={todo.task}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        ))}
      </ul>
    </section>
  );
}
