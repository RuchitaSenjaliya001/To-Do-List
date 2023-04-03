import React from 'react'
import OneTask from '../Tasks/OneTask'

export default function TaskItems(props) {

  return (
    <>
      <div className={`text-center text-3xl font-bold underline my-4 ${props.mode==='dark'? 'text-white' : 'text-gray-800'}`}>My Tasks</div>
      <div className={`py-5 max-w-7xl m-auto rounded-lg border ${props.mode==='dark' && 'bg-[#404B69]'} bg-[#ECF2FF]`}>
        {props.items.map((task) =>
          <OneTask title={task.title} date={task.date} key={task.id} id={task.id} mode={props.mode} onDelete={props.onDelete}/>
        )}
      </div>
    </>
  )
}
