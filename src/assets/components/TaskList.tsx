import type { Task } from "../../App";

type Props = {
  tasks: Task[];
  onToggleTask: (id: number) => void;
};

function TaskList({ tasks, onToggleTask }: Props) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          <input
            type="checkbox"
            checked={t.done}
            onChange={() => onToggleTask(t.id)}
          />
          {t.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
