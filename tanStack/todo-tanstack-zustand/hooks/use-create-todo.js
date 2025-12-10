//creating a custom hook for creating a todo item because we want to encapsulate the logic for creating a todo item in one place and make it reusable across different components. We are using `zustand` for state management and `tanstack/react-query` for data fetching and caching.

import { createTodoServerAction } from "@/actions/todo-actions";
import { useTodoStore } from "@/store/todo-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const todoKeys = {
  all: ["todos"], //constant key for all todos queries
  lists: () => [...todoKeys.all, "lists"], //key for todos list queries
};

export function useCreateTodo() {
  const queryClient = useQueryClient(); //<- this is tanstack query client, used to interact with the query cache, we have used this here to invalidate the todos query after creating a new todo, so that the todos list is refetched and updated with the new todo item.

  const addTodo = useTodoStore((store) => store.addTodo); //<- this is zustand store action to add a new todo item to the local state

  return useMutation({
    mutationFn: (data) => createTodoServerAction(data),
    onSuccess: (result) => {
      if (result.success) {
        addTodo(result.data); //update local state with the new todo item, also update zustand store
        //invalidate the todos query to refetch the todos list
        queryClient.invalidateQueries({ queryKey: todoKeys.lists() }); //<- this will refetch the todos list query and update the UI with the new todo item
      }
    },
  }); //<- this is tanstack mutation hook, used to perform the create todo operation
}
