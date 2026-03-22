import { useState } from "react";
import Header from "./assets/components/Header";
import TaskForm from "./assets/components/TaskForm";
import TaskList from "./assets/components/TaskList";

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    if (!text.trim()) return;

    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );
}

export default App;
