"use client";
import React from "react";
import { todoDelete } from "@/actions/todoActionSupabase";
import { IoMdRemoveCircle } from "react-icons/io";

interface DeleteTodoProps {
  id: string;
}

export default function DeleteTodo({ id }: DeleteTodoProps) {
  return (
    <div>
      <button
        className="p-2 bg-red-500 rounded-md text-white font-bold"
        onClick={() => todoDelete(id)}
      >
        <IoMdRemoveCircle />
      </button>
    </div>
  );
}
