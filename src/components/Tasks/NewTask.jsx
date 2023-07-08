import React from 'react'
import AddTaskForm from '../Tasks/AddTaskForm'

export default function NewTask({ onAddTask }) {
  const saveTaskHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString()
    }
    onAddTask(taskData);
  }
  return (
    <AddTaskForm onSaveTask={saveTaskHandler} />
  )
}
