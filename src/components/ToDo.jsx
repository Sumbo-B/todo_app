import "../style/style.css";
import useStore from "../store/store";
import { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
  const removeTask = useStore((state) => state.removeTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task.trim());
      setTask("");
    }
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label htmlFor="task">New Item</label>
        <input
          type="text"
          id="task"
          placeholder="Enter Task Here..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">
          Add Task
        </button>
      </form>
      <h2>You have {tasks.length} Tasks to Complete </h2>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => removeTask(index)}>Completed Task</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDo;
