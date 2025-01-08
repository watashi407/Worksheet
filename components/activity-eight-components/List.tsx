"use client";
import React from "react";
import DeleteTodo from "./DeleteTodo"; // Adjust the path as necessary
import UpdateTodo from "./UpdateTodo"; // Adjust the path as necessary
interface Props {
  task: string;
  id: string;
  isCompleted?: boolean;
}
export default function List({ task, id, isCompleted }: Props) {
  return (
    <div>
      {" "}
      <li
        key={id}
        className="border-none p-4 my-2 rounded flex justify-between items-center "
      >
        {isCompleted ? (
          <span
            className={`text-[16px] font-semibold line-through decoration-red-500 capitalize ${
              isCompleted ? "decoration-red-500" : ""
            }`}
          >
            {task}
          </span>
        ) : (
          <span className="text-[16px] font-semibold capitalize">{task}</span>
        )}

        <div className="flex gap-2">
          <span className="text-[11px]">
            <UpdateTodo id={id} isCompleted={isCompleted ?? false} />
          </span>
          <span className="text-[11px]">
            <DeleteTodo id={id} />
          </span>
        </div>
      </li>
    </div>
  );
}
