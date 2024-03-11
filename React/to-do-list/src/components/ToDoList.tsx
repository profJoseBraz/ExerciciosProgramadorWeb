import { useState, ChangeEvent } from 'react';
import MyButton from './MyButton';
import MyInput from './MyInput';
import './ToDoList.css'

function ToDoList(){

    const [task, setTask] = useState(['']);

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setTask([e.target.value]);
    }

    const addTask = () => {
        alert("clicou");
    }

    return(
        <>
            <MyInput type='text'/>
            <MyButton onClick={addTask}>Add</MyButton>
        </>
    );
}

export default ToDoList;