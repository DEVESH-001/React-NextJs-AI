// autoComplete with debounce

import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const ProductLists = [
    "apple",
    "banana",
    "grape",
    "orange",
    "mango",
    "pear",
    "peach",
    "date",
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // const filteredSuggestions = ProductLists.filter((i) =>
    //   i.includes(e.target.value),
    // );
    //adding debounce to the search
    const filteredSearch = _.debounce((value)=>{
      return ProductLists.filter((suggestion)=>
        suggestion.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    })
    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="typehead-container">
      <input
        type="text"
        name="typehead"
        className="typehead"
        placeholder="search"
        value={inputValue}
        onChange={handleChange}
      />

      {inputValue && (
        <div>
          {suggestions.map((suggestion) => (
            <h2 key={suggestion}>{suggestion}</h2>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
