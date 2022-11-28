import { useState } from "react";

function App() {
  const [work, setWork] = useState("");
  const handleAdd = () => {
    console.log("aoma");
  };
  return (
    <div className="flex gap-8 h-screen items-center bordder border-red-500 justify-center">
      <input
        type="text"
        className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
        value={work}
        onChange={(e) => setWork(e.target.value)}
      ></input>
      <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
        onClick={() => handleAdd}
      >
        Add
      </button>
      <div className="border-blue-400"></div>
    </div>
  );
}

export default App;
