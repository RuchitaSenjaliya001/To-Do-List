import React, { useState } from 'react'
import Date from './Date';

export default function OneTask(props) {

    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState(props.title)
    const editHandler = (event) => {
        setEdit(!edit)
    }
    const editValue = (event)=>{
        setTitle(event.target.value)
    }

    return (
        <div className={`flex justify-between items-center ${props.mode === 'dark' && 'bg-[#7286D3]'} bg-[#7286D3] text-white max-w-6xl m-auto p-3 rounded-lg my-4`}>
            <div className="flex space-x-6 items-center text-center">
                {/* <input type="checkbox" name="check" id="check" className='w-5 h-5' checked={check} onChange={checkBoxClickHandler} onClick={checkBoxClickHandler}/> */}
                <input type="checkbox" name="check" id="check" className='w-5 h-5' />
                <Date date={props.date} />
                {edit ? <input type="text" value={title} onChange={editValue} className="text-black"/> : <div className="text-2xl">{props.title}</div>}


            </div>
            <div>
                <button className="bg-[#645CBB] px-5 py-2 m-3 rounded-lg text-white hover:bg-[#4e46aa] duration-300" onClick={editHandler}>{edit ? 'Save' : 'Edit'}</button>
                <button className="bg-[#645CBB] px-5 py-2 m-3 rounded-lg text-white hover:bg-[#4e46aa] duration-300">Completed</button>
                {/* <button className="bg-[#645CBB] px-5 py-2 my-3 rounded-lg text-white hover:bg-[#4e46aa] duration-300">Delete</button> */}
            </div>
        </div>
    )
}
