# Advanced Props in React

This project demonstrates various advanced patterns for using props in React components. It serves as a comprehensive guide and reference for building flexible and reusable components.

## Project Structure

The application is structured to showcase different prop patterns in isolated sections.

### Main Application (`App.jsx`)

The entry point of the application. It:

- Wraps the entire application in a `ThemeProvider` context to manage global theme state.
- Renders a responsive navigation bar to jump between different sections.
- Displays each demonstration component in a scrollable layout.

### Components

The `src/components` directory contains the following demonstration components:

#### 1. Basic Props (`BasicProps.jsx`)

Demonstrates the fundamental usage of props to control component appearance and behavior.

- **Features**:
  - Passing primitive values (strings, numbers, booleans).
  - Passing callback functions (event handlers).
  - Conditional styling based on props (e.g., `color`, `size`, `disabled`).
- **Key Takeaway**: Props are the primary mechanism for passing data from parent to child.

#### 2. Children Props (`ChildrenProps.jsx`)

Illustrates component composition using the special `children` prop.

- **Features**:
  - Creating wrapper components (e.g., `Card`, `Container`).
  - Passing arbitrary JSX as children to components.
  - Creating flexible layouts that don't know their content ahead of time.
- **Key Takeaway**: The `children` prop enables powerful component composition and layout reuse.

#### 3. Complex Props (`ComplexProps.jsx`)

Shows how to pass complex data structures as props.

- **Features**:
  - Passing nested objects (e.g., user profiles with stats and settings).
  - Passing configuration objects for theming and actions.
  - Rendering components based on structured data.
- **Key Takeaway**: Props can be objects, arrays, or functions, allowing for sophisticated component configurations.

#### 4. Ref Props (`RefProps.jsx`)

Demonstrates how to access DOM nodes in child components using `ref` and `forwardRef`.

- **Features**:
  - Using `forwardRef` to expose a DOM node to a parent component.
  - Managing focus programmatically from a parent component.
  - Reading values directly from DOM elements (imperative approach).
- **Key Takeaway**: Refs provide an "escape hatch" to interact directly with the DOM when declarative props aren't enough.

#### 5. Theme Context (`ThemeToggler.jsx`)

Implements the Context API to avoid "prop drilling" for global state.

- **Features**:
  - `ThemeProvider`: A context provider component that manages the theme state (light/dark).
  - `ThemeContext`: The context object itself.
  - Demonstrates how to provide and consume global state across the component tree.
- **Key Takeaway**: Context is ideal for global data like themes, user authentication, or language settings.
