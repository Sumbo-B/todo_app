import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (index) =>
    set((state) => {
      let newTasks = [...state.tasks];
      newTasks.splice(index, 1);
      return { tasks: newTasks };
    }),
}));

export default useStore;
