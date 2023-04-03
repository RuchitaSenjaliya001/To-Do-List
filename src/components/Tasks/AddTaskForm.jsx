import React,{useState} from 'react'

export default function AddTaskForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isValid, setIsValid] = useState(true);

    const titleChangeHandler = (event)=>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredTitle(event.target.value)
    }

    const dateChangeHandler = event =>{
        if(event.target.value.trim().length > 0){
            setIsValid(true)
        }
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const taskData = {
            title: enteredTitle,
            date: new Date(enteredDate)
        }
        if(enteredTitle.length === 0 || enteredDate.length === 0){
            setIsValid(false);
            return;
        }
        console.log(typeof(enteredDate));
        props.onSaveTask(taskData);
        setEnteredTitle("");
        setEnteredDate("");
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="flex max-w-6xl m-auto border justify-between px-5 items-center shadow-lg my-5" style={{borderColor: !isValid ? 'red' : ''}}>
                <input type="text" name="task" id="task" placeholder={!isValid ? 'Please Enter Valid detail' : 'Add new task...'} className="py-2 w-4/5 focus:outline-none bg-transparent" onChange={titleChangeHandler} value={enteredTitle} />
                <div>
                <input type="date" name="date" id="date" className='pr-4 focus:outline-none focus:bg-transparent bg-transparent cursor-pointer' onChange={dateChangeHandler} value={enteredDate} style={{borderColor: !isValid ? 'red' : ''}}/>
                <button type='submit' className="bg-[#645CBB] px-5 py-2 my-3 rounded-lg text-white hover:bg-[#4e46aa] duration-300">Add</button>
                </div>
            </div>
        </form>

    )
}
