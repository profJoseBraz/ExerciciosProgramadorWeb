import { useState, ChangeEvent } from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import Task from "./Task";
import "./ToDoList.css";

interface Task {
    id: number;
    description: string;
    completed: boolean;
}

function ToDoList() {
    //UseState utilizado para guardar a lista de tarefas. Ele é do tipo array de Task e é inicializado com um array vazio
    const [tasks, setTasks] = useState<Task[]>([]);

    //Usestate utilizado para manipular o conteúdo do input referente a uma nova tarefa. É inicializado com uma string vazia pois inicialmente não tem nada digitado no campo
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        //Validação para não deixar adicionar uma nova tarefa sem descrição
        if (inputValue.length > 0) {
            const newTask: Task = {
                id: tasks.length,
                description: inputValue,
                completed: false,
            };

            //Atribuição da nova tarefa ao Array tasks utilizando a spread syntax. Essa forma permite simplespemnte adicionar a nova tarefa ao array
            setTasks([...tasks, newTask]);

            //Após adicionar a nova tarefa, limpa o input usado para digitar a tarefa. Isso é feito utilizando o setInputValue do useState
            setInputValue("");
        } else {
            alert("Não é possível inserir uma tarefa sem decrição!");
        }
    };

    //Manipulador do evendo onChange do input de nova tarefa
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <div className="to-do-list-form">
                <MyInput
                    type="text"
                    value={inputValue}
                    onChange={handleOnChange}
                />
                <MyButton onClick={addTask}>Add</MyButton>
            </div>

            {/*Teste lógico para saber se o conteúdo da lista de tarefas é maior que zero, ou seja, se existe pelo menos uma tarefa na lista*/}
            {tasks.length > 0 && (
                <div className="tasks-container">
                    {tasks.map((task) => (
                        <Task key={task.id} description={task.description} />
                    ))}
                </div>
            )}
        </>
    );
}

export default ToDoList;
