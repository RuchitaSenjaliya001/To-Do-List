import React from 'react'
import AddTaskForm from './AddTaskForm'

export default function NewTask(props) {
    const saveTaskHandler = (enteredTaskData)=>{
        const taskData={
            ...enteredTaskData,
            id: Math.random().toString()
        }
        props.onAddTask(taskData);
    }
  return (
    <AddTaskForm onSaveTask={saveTaskHandler}/>
  )
}
