"use client";

import { createUser, upadateUser } from "@/actions";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const UserForm = ({ user }) => {
  const createUser = async (formData) => {
    if (user) {
      await upadateUser(user.id, formData);
    } else {
      await createUser(formData);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{user ? "Update User" : "Add New User"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={createUser} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter name"
              defaultValue={user?.name}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              defaultValue={user?.email}
              required
            />
          </div>

          {user && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isActive"
                name="isActive"
                defaultChecked={user?.isActive}
              />
              <Label htmlFor="isActive">Is Active</Label>
            </div>
          )}

          <Button type="submit" className="w-full">
            {user ? "Update User" : "Create User"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserForm;
