# TODO

`Check_List`

- NEXTJS
- TAILWINDCSS
- ZOD
- ZUSTAND
- TANSTACK QUERY
- MONGODB
- SERVER ACTIONS

`features`

1. createTodo
2. getTods
3. updateTodos
4. deleteTods

- toggleTodo

## Setup

- create your db file, define your Schema 
- wrap your app with `QueryClientProvider` in `_app.js`, Reference [here](https://tanstack.com/query/v4/docs/react/guides/queries#using-queryclientprovider)

- go to layout.jsx, import `QueryProvider` component and wrap your `children` with it.

- in actions folder, create your server actions to handle CRUD operations, `todos-actions.js`. Reference [here](https://react.dev/learn/using-server-actions-to-handle-form-submissions#creating-a-server-action)

- create a useCreateTodo custom hook to encapsulate the logic for creating a todo item, use `zustand` for state management and `tanstack/react-query` for data fetching and caching. Reference [here](https://tanstack.com/query/v4/docs/react/guides/mutations)

- create s `store.js` file to define your zustand store for managing the todo state. [here](https://zustand.docs.pmnd.rs/middlewares/devtools)

- so i guess all the beginners are confuse what to give what to not give in the store, let me make it simple for you if you are buiding any web application you need to manage the state of your application, so you need to define the state variables and the functions to update those state variables in the store. for example if you are building an e-commerce application you need to manage the state of the cart, so you need to define the cart state variable and the functions to add, remove, update the cart items in the store. or you building an calories traker application you need to manage the state of the calories, so you need to define the calories state variable and the functions to add, remove, update the calories in the store. So in store we always keep the main state variables and the functions to update those state variables like add, remove, update , and other helper functions like toggle, filter etc. we don't keep the UI state variables like isLoading, isError, isSuccess etc. because those state variables are specific to the component and we can manage them in the component itself. now the question arises do i have to put every ui in store let say every component ui? no you don't have to put every ui in store only the main state variables and the functions to update those state variables. for example in todo application we have only one main state variable todos and the functions to update those todos like addTodo, removeTodo, updateTodo, toggleTodo etc. so we put only those state variables and functions in the store.

