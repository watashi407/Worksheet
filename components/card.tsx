"use client";
import Image from "next/image";
import { ApiResponse } from "../types/type";

const Card: React.FC<ApiResponse> = ({ avatar, name, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 flex flex-col">
      <Image
        className=" object-cover"
        src={avatar ? avatar : "https://via.placeholder.com/300"}
        alt="Description of the image"
        width={600}
        height={400}
      />
      <div className="p-4 flex-grow">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
