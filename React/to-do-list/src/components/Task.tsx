import { ChangeEvent, ReactNode, useState } from "react";
import MyInput from "./MyInput";
import "./Task.css";
import MyButton from "./MyButton";

//Propriedades do componente Task. Necessita apenas de uma propriedade de descrição para ser adicionada a tarefa quando ela for criada
interface Props {
    description: string;
}

function Task({ description }: Props) {
    //Use state que é inicializado com o valor da descrição da tarefa passado como prop
    const [taskDescription, setTaskDescription] = useState(description);

    //Manipulador do evento onChange utilizado para setar o valor do taskDescription do useState
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskDescription(e.target.value);
    };

    return (
        <div className="task-container">
            <MyInput
                type="text"
                value={taskDescription}
                onChange={handleOnChange}
            />

            <MyButton>ck</MyButton>
            <MyButton>del</MyButton>
        </div>
    );
}

export default Task;
