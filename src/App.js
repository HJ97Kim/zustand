import { useState } from "react";
import useStore from "./store";

function App() {
  const { addTodo } = useStore();

  const [text, setText] = useState("");

  return (
    <>
      <input onChange={(e) => setText(e.currentTarget.value)} value={text} />
      <button
        onClick={() => {
          if (text.length) {
            addTodo(text);
            setText("");
          }
        }}
      >
        등록
      </button>
      <List />
    </>
  );
}

function List() {
  const { todoList, removeTodo } = useStore();
  return (
    <>
      {todoList.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </div>
      ))}
    </>
  );
}

export default App;
