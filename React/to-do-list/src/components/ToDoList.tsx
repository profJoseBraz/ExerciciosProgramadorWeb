import { useState, ChangeEvent } from 'react';
import MyButton from './MyButton';
import MyInput from './MyInput';
import './ToDoList.css'

interface Task{
    id: number;
    description: string;
    completed: boolean;
}

function ToDoList(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        const newTask: Task = {
            id: tasks.length,
            description: inputValue,
            completed: false
        };
        setTasks([...tasks, newTask]);
    }

    return(
        <>
            <MyInput type='text' onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>
            <MyButton onClick={addTask}>Add</MyButton>
            {tasks.length > 0 && (
                <ul>
                    {tasks.map((task) => (
                        <p key={task.id}>{task.description}</p>
                    ))}
                </ul>
            )}
        </>
    );
}

export default ToDoList;