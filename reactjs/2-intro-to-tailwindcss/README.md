# TailwindCSS + Components + Props(React)

- TailwindCSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.
- It allows developers to rapidly build modern websites without writing custom CSS.
- In this project, we will integrate TailwindCSS into a React application and create reusable components using TailwindCSS classes.

## Components Overview

- Components are reusable pieces of UI that can be used throughout your application.
- They help in maintaining consistency and reducing code duplication.
- In this project, we will create a `Card` component styled with TailwindCSS classes.

## Props in React

- Props (short for properties) are a way to pass data from parent components to child components in React.
- They allow components to be dynamic and reusable by accepting different values.
- In this project, we will use props to customize the content of our `Card` component.

## Project Structure

- `src/`
  - `components/`
    - `Card.jsx` - A reusable Card component styled with TailwindCSS.
  - `App.jsx` - The main application file where we will use the Card component.

## More about components and props

- The `Card` component accepts two props: `title` and `btnText`.
- The `title` prop is used to set the title of the card, while the `btnText` prop is used to set the text of the button within the card.
- This allows us to create multiple instances of the `Card` component with different titles and button texts, making it reusable and flexible.

- You can also provide default values for props in case they are not passed from the parent component. In this example, if no `title` or `btnText` is provided, the card will display "Default Title" and "Click Me" respectively.
