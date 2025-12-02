import "./App.css";
import Counter from "./components/counter";
import CounterValue from "./components/CounterValue";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <h1>ZUSTAND</h1>
      <Navbar />
      {""}
      <div className="card">
        <Counter />
        <CounterValue />
        <Posts/>
      </div>
    </>
  );
}

export default App;
