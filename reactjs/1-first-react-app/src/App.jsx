import "./App.css";

function App() {
  return (
    <>
      <h1>
        Learn React With{" "}
        <a href="https://devesh.work" target="_blank">
          Devesh
        </a>
      </h1>
      <div className="content">
        <h2>What is React?</h2>
        <p>
          React is a popular JavaScript library for building user interfaces,
          developed by Facebook. It allows developers to create reusable UI
          components and efficiently update the DOM using a virtual DOM
          mechanism.
        </p>

        <h2>Key React Concepts</h2>
        <ul>
          <li>
            <strong>Components:</strong> Reusable pieces of UI that can be
            functions or classes
          </li>
          <li>
            <strong>JSX:</strong> JavaScript XML syntax that lets you write
            HTML-like code in JavaScript
          </li>
          <li>
            <strong>Props:</strong> Data passed from parent to child components
          </li>
          <li>
            <strong>State:</strong> Dynamic data that components can manage
            internally
          </li>
          <li>
            <strong>Hooks:</strong> Functions like useState and useEffect that
            add functionality to components
          </li>
        </ul>

        <h2>Project Files Overview</h2>
        <ul>
          <li>
            <strong>src/App.jsx:</strong> Main component file where your app's
            UI is defined
          </li>
          <li>
            <strong>src/main.jsx:</strong> Entry point that renders the App
            component to the DOM
          </li>
          <li>
            <strong>src/App.css:</strong> Styles specific to the App component
          </li>
          <li>
            <strong>index.html:</strong> Root HTML file that hosts the React
            application
          </li>
          <li>
            <strong>package.json:</strong> Lists dependencies and project
            scripts
          </li>
          <li>
            <strong>vite.config.js:</strong> Configuration for Vite build tool
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
