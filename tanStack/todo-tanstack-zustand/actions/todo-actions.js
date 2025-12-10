"use server";

import ConnectDB from "@/lib/db";
import Todo from "@/model/todo";
import { todoValidation } from "@/validations/todo";
const { revalidatePath } = require("next/cache");

export async function createTodoServerAction(data) {
  try {
    //validate data
    const validatedData = todoValidation.parse(data); //throws error if validation fails
    await ConnectDB();
    const todo = await Todo.create(validatedData); //create todo in db
    revalidatePath("/"); //revalidating the home page to reflect the new todo
    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error("Error creating todo:", error);
    return {
      success: false,
      error: "Failed to create todo",
    };
  }
}
