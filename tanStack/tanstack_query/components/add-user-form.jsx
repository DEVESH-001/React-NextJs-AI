"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function addUser(userData) {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
}

export default function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const queryCLient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryCLient.invalidateQueries(["users"]);
      setName("");
      setEmail("");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email) {
      //call my-mutation
      mutation.mutate({ name, email }); // pass the user data to the mutation function
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add User</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Adding" : "Add User"}
          </Button>
          {mutation.error && (
            <div className="text-red-300 text-sm">
              Error: {mutation.error.message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
