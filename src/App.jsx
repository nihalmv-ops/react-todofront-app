import { useState } from "react";
import Header from "./component/Header";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import "./App.css";



function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task) return;
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <TodoInput addTask={addTask}  />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;