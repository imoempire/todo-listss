import "./App.css";
import { useState } from "react";

function App() {
  // STATE FOR THE TODOS
  const [todolist, setTodoList] = useState([]);

  // STATE FOR THE INPUT BOX
  const [inputText, setInputText] = useState("");

  // ADD TODO FUNCTION
  const addTodo = () => {
    if (!inputText) {
      console.log("Please enter a text");
      return false;
    }
    let newTodo = {
      id: Date.now(),
      name: inputText,
    };

    setTodoList([...todolist, newTodo]);
    setInputText("");
  };

  const removeTodo = (id) => {
    let newTodo = todolist.filter((todo) => todo.id !== id);
    setTodoList(newTodo);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <input
          placeholder="add todo"
          style={{
            border: "1px solid red",
            borderRadius: "5px",
          }}
          value={inputText}
          onChange={(value) => {
            setInputText(value.target.value);
          }}
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <div>
        <p>All Todo list </p>
        {todolist?.map((text) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
              key={text.id}
            >
              <p>{text.name}</p>
              <span
                onClick={() => removeTodo(text.id)}
                style={{ color: "red" }}
              >
                delete
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
