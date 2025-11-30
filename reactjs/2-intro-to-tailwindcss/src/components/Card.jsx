import React from "react";

function Card({ title = "Default Title", btnText }) {
  return (
    <div className="max-w-sm  flex gap-4 border border-gray-200 rounded-xl mt-6 shadow-md  dark:border-gray-700 p-4 overflow-hidden transition-shadow">
      <img
        className="w-48 h-48 object-cover"
        src="https://images.unsplash.com/photo-1763641683842-3b4f09950d67?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-400">{title}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          laborum obcaecati error aspernatur, maiores doloribus.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
