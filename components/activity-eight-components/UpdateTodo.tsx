import React from "react";
import { FaCheck, FaUndo } from "react-icons/fa";

import { todoComplete, todoUndoComplete } from "@/actions/todoActionSupabase";

interface DeleteTodoProps {
  id: string;
  isCompleted: boolean;
}

export default function UpdateTodo({ id, isCompleted }: DeleteTodoProps) {
  return (
    <div>
      {isCompleted ? (
        <form
          action={() => {
            todoUndoComplete(id);
          }}
        >
          <button
            type="submit"
            className="p-2 bg-slate-800 rounded-md text-white font-bold"
          >
            <FaUndo />
          </button>
        </form>
      ) : (
        <button
          className="p-2 bg-green-500 rounded-md text-white font-bold"
          onClick={() => todoComplete(id)}
        >
          <FaCheck />
        </button>
      )}
    </div>
  );
}
