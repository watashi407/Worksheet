"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/card";
import { ApiResponse } from "../types/type";

const CardList: React.FC = () => {
  const [users, setUsers] = useState<ApiResponse[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://random-data-api.com/api/users/random_user?size=10"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const formattedData = data.map((user: ApiResponse) => ({
          avatar: user.avatar,
          name: `${user.first_name} ${user.last_name}`,
          description: user.email || "No description available",
        }));

        console.log("formattedData", formattedData);
        setUsers(formattedData);
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {users.map((user, index) => (
        <div
          key={index}
          className="p-4 sm:basis-full sm:max-w-full md:basis-1/3 md:max-w-[calc(33.333%-1rem)]"
        >
          <Card
            avatar={user?.avatar}
            name={user.name || "No name available"}
            description={user.description || "No description available"}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
