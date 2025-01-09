import React from "react";
import TodoList from "@/components/activity-eight-components/TodoList";
import { fetchTodos, fetchByEmail } from "@/actions/todoActionSupabase";
import { getUserSession } from "@/actions/auth";

interface Todo {
  id: string;
  created_at?: Date;
  user_id?: string;
  task: string;
  isCompleted?: boolean;
}

async function fetchUserTodos() {
  try {
    const response = await getUserSession();
    const email = response?.user?.email;

    if (!email) {
      throw new Error("User email is missing.");
    }

    const userResult = await fetchByEmail(email);
    if (!userResult.success || !userResult.data?.id) {
      throw new Error("Failed to fetch user data.");
    }

    const { todos = [] } = await fetchTodos(userResult.data.id);
    return { todos };
  } catch (error) {
    console.error("Error fetching user todos:", error);
    return { todos: [] };
  }
}

export default async function Page() {
  const { todos }: { todos: Todo[] } = await fetchUserTodos();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}
