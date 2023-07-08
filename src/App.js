import React, { useState, useContext } from "react";
import LogIn from "./components/LogInPage/LogIn";
import Navbar from "./components/Navbar";
import NewTask from "./components/Tasks/NewTask";
import TaskItems from "./components/Tasks/TaskItems";
import AuthContext from "./store/auth-context";

const DUMMY = [
  {
    id: "e1",
    title: "Shopping",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const ctx = useContext(AuthContext);

  const [tasks, setTasks] = useState(DUMMY);

  const addTaskHandler = (task) => {
    setTasks((prev) => {
      return [task, ...prev];
    });
    console.log(tasks);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prev) => {
      const updateTasks = prev.filter((task) => task.id !== taskId);
      return updateTasks;
    });
  };

  return (
    <>
      {!ctx.isLoggedIn && <LogIn />}
      {ctx.isLoggedIn && (
        <main>
          <Navbar
            brand="To-Do List"
            toggleMode={ctx.toggleMode}
            mode={ctx.mode}
          />
          <NewTask onAddTask={addTaskHandler} />
          <TaskItems
            items={tasks}
            mode={ctx.mode}
            onDelete={deleteTaskHandler}
          />
        </main>
      )}
    </>
  );
}

export default App;
