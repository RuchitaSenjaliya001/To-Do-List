import React, { useState } from 'react'
import Date from '../UI/Date';

export default function OneTask(props) {

    const [complete, setComplete] = useState(false)

    const deleteHandler = ()=>{
        props.onDelete(props.id);
    }

    const completeHandler = ()=>{
        setComplete(!complete)
    }
    return (
        <>
            <div>
                <div className={`flex justify-between items-center ${props.mode === 'dark' && 'bg-[#7286D3]'} bg-[#7286D3] text-white max-w-6xl m-auto p-3 rounded-lg my-4`}>
                    <div className="flex space-x-6 items-center text-center">
                        <input type="checkbox" name="check" id="check" className='w-5 h-5' onChange={completeHandler}/>
                        <Date date={props.date} />
                        <div className="text-2xl">{props.title}</div>
                    </div>
                    <div className='flex space-x-3 items-center'>
                        {complete ? <div>Completed ✔</div> : ""}
                        <button className="bg-[#645CBB] px-5 py-2 my-3 rounded-lg text-white hover:bg-[#4e46aa] duration-300" onClick={deleteHandler}>Delete</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
