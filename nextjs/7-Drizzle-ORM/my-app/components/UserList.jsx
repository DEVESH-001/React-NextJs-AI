import { deleteUser, getAllUsers } from "@/actions";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export async function UserList() {
  const users = await getAllUsers();
  console.log(users);

  if (!Array.isArray(users) || users.length === 0) {
    return (
      <Card>
        <CardContent className={"p-6"}>
          <p>
            {!Array.isArray(users)
              ? "Database is not connected"
              : "No users found"}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id}>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="py-4">
                <div className="flex items-center gap-2">
                  <h3>{user.name}</h3>
                  <Badge>{user.isActive ? "Active" : "InActive"}</Badge>
                </div>
                <p>{user.email}</p>
                <p>{user.createdAt?.toLocaleDateString()}</p>
              </div>
              <div>
                <form action={deleteUser.bind(null, user.id)}>
                  <Button variant={"destructive"} size={"sm"} type="submit">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
