function App() {
  return (
    <div className="flex gap-8 h-screen items-center bordder border-red-500 justify-center">
      <input
        type="text"
        className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
      ></input>
      <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        Add
      </button>
    </div>
  );
}

export default App;
