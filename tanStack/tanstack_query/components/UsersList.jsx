"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Function to fetch users from the API
async function fetchUsers() {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

const UsersList = () => {
  // Using useQuery to fetch users
  const {
    data: users,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["users"], // unique key for the query
    queryFn: fetchUsers, // function that fetches the data
  });
  console.log(users);

  

    if (isLoading) {
    return <div className="text-2xl">Loading...</div>;
    }
    if (isError) {
    return <div className="text-2xl">Error: {error.message}</div>;
    }
console.log(users);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users List</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {users?.map((user) => (
            <li key={user.id} className="p-4 border rounded">
              <div>
                <p className="font-medium">{user.name}</p>{" "}
                <p className="text-sm text-gray-600">{user.email}</p>{" "}
              </div>
              <Button
                className={"cursor-pointer"}
                variant={"destructive"}
                size={"sm"}

              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default UsersList;
