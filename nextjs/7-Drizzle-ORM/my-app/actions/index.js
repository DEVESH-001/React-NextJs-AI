"use server";

const { db } = require("@/lib/db");
const { users } = require("@/schema");
const { eq } = require("drizzle-orm");
const { revalidatePath } = require("next/cache");

//crete a new user
export async function createUser(formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  const user = await db.insert(users).values({
    name,
    email,
  });
  revalidatePath("/");
  return user;
}

export async function getAllUsers() {
  const allUsers = await db.select().from(users);
  return allUsers || [];
}

export async function getUserByid(id) {
  const user = await db.select().from(users).where(eq(users.id, id));
  return user;
}

export async function upadateUser(id, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const isActive = formData.get("isActive") === "on";

  await db
    .update(users)
    .set({ name, email, isActive, updatedAt: new Date() })
    .where(eq(users.id, id));

  revalidatePath("/");
  return { message: "User Updated", success: true };
}

export async function deleteUser(id) {
  await db.delete(users).where(eq(users.id, id));
  revalidatePath("/");
  return { message: "User Deleted", success: true };
}
