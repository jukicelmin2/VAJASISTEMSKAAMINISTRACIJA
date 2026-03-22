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
    <form onSubmit={submit} style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        Dodaj novo nalogo:
      </label>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Unesi novu nalogu"
        style={{ marginRight: "10px" }}
      />

      <button type="submit">Dodaj</button>
    </form>
  );
}

export default TaskForm;
