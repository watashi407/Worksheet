import React from "react";
import TodoList from "@/components/activity-eight-components/TodoList";
import { fetchTodos } from "@/actions/todoActionSupabase";

export default async function page() {
  const { todos = [] } = await fetchTodos();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}
