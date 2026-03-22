import { useState } from "react";
import type { FormEvent } from "react";

type Props = {
  onAddTask: (text: string) => void;
};

function TaskForm({ onAddTask }: Props) {
  const [text, setText] = useState<string>("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova naloga"
      />
      <button type="submit">Dodaj</button>
    </form>
  );
}

export default TaskForm;
