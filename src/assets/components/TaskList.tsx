import { Task } from "../App";

type Props = {
  tasks: Task[];
  onToggleTask: (id: number) => void;
};

function TaskList({ tasks, onToggleTask }: Props) {
  if (tasks.length === 0) {
    return <p>Ni nalog.</p>;
  }

  return (
    <ul style={{ paddingLeft: "20px" }}>
      {tasks.map((t) => (
        <li key={t.id} style={{ marginBottom: "8px" }}>
          <input
            type="checkbox"
            checked={t.done}
            onChange={() => onToggleTask(t.id)}
            style={{ marginRight: "8px" }}
          />
          <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
            {t.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
