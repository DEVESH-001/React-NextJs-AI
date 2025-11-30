import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-blue-500 dark:text-sky-400 border-2 p-4 rounded-xl">
        Learn Tailwind CSS
      </h1>
      {/* card */}

      <Card title={"Learn from Devesh"} btnText="Buy Now"  />
      <Card title={"Learn from YadavJi"} btnText="Start your free Trial" />
    </>
  );
}

export default App;
