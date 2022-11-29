import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [work, setWork] = useState("");
  const [listTodo, setListTodo] = useState([]);

  const handleAdd = () => {
    listTodo.filter((e) => e === work).length === 0
      ? setListTodo((prev) => [...prev, work])
      : toast("Duplicate data");

    setWork("");
  };

  const handleDel = (ele) => {
    setListTodo(
      listTodo.filter((el) => {
        return el !== ele;
      })
    );
  };

  return (
    <>
      <div className="flex flex-col  h-screen items-center bordder border-red-500 justify-center">
        <div className="flex gap-8">
          <input
            type="text"
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          ></input>
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div className="border-blue-400">
          <ul>
            {listTodo?.map((ele, idx) => {
              return (
                <li key={idx} className="flex gap-10 items-center">
                  <h1 className="my-2">{ele}</h1>
                  <h1 className="my-2 right-0 text-lg font-bold text-red-500 p-2">
                    <button onClick={() => handleDel(ele)}>x</button>
                  </h1>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
