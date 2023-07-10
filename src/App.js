import { useState } from "react";
import {TodoList} from "./TodoList";


function App() {

  const [todos, setTodos] = useState(["todo1", "todo2"])

return (
  <>
    <TodoList todos = {todos}/>
    <input type="text"/>
    <button>タスクを追加</button>
    <button>完了したタスクを追加</button>
    <div>残りのタスクを追加：0</div>
  </>
)
}

export default App;
