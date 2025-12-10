import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useTodoStore = create(
  devtools(
    (set, get) => ({
      todos: [], // Initial state
      filter: "all", // Initial filter state
      isLoading: false, // Loading state

      setTodos: (todos) => set({ todos }), // Action to set todos
      setFilter: (filter) => set({ filter }), // Action to set filter
      setIsLoading: (isLoading) => set({ isLoading }), // Action to set loading state

      // Action to add a new todo
      addTodo: (todo) =>
        set((state) => ({
          todos: [todo, ...state.todos], // Add new todo at the beginning
        })),
    }),
    { name: "todo-store" }
  )
);
