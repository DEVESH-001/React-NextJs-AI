import UserForm from "@/components/UserForm";
import { UserList } from "@/components/UserList";

import React from "react";

const Home = () => {
  return (
    <div className="mx-auto max-w-5xl py-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        <p>
          Basic CRUD With <span className="font-serif">DRIZZLE ORM</span>{" "}
        </p>
      </div>

      <div className="grid gap-8 md:grid:cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Users</h2>

          <UserList />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
