import React, { useState } from 'react'
import AddTaskForm from './components/AddTaskForm';
import Navbar from './components/Navbar';
import NewTask from './components/NewTask';
import TaskItems from './components/TaskItems';

const DUMMY = [{
  id: 'e1',
  title: 'Shopping',
  date: new Date(2020, 7, 14),
},
{
  id: 'e2',
  title: 'Car Insurance',
  date: new Date(2021, 2, 28),
},
];

function App() {
  const [tasks, setTasks] = useState(DUMMY);
  const [mode, setMode] = useState('light')

  const addTaskHandler = (task) => {
    setTasks((prev) => {
      return [task, ...prev]
    });
    console.log(tasks);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#283149';
      document.body.style.color = '#fff'
      return;
    }
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000'
      return;
    }
    console.log(mode);
  }
  const saveTaskHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString()
    }
    addTaskHandler(taskData)
  }
  return (
    <>
      <Navbar brand='To-Do List' toggleMode={toggleMode} mode={mode} />
      <NewTask onAddTask={addTaskHandler} onSave={saveTaskHandler} />
      <TaskItems items={tasks} mode={mode} onSave={saveTaskHandler}/>
    </>

  );
}

export default App;
